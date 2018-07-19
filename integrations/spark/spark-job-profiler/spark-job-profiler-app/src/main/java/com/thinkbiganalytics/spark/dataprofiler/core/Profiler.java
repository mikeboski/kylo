package com.thinkbiganalytics.spark.dataprofiler.core;

/*-
 * #%L
 * thinkbig-spark-job-profiler-app
 * %%
 * Copyright (C) 2017 ThinkBig Analytics
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */

import com.thinkbiganalytics.hive.util.HiveUtils;
import com.thinkbiganalytics.policy.FieldPolicy;
import com.thinkbiganalytics.spark.DataSet;
import com.thinkbiganalytics.spark.SparkContextService;
import com.thinkbiganalytics.spark.dataprofiler.ProfilerConfiguration;
import com.thinkbiganalytics.spark.dataprofiler.StatisticsModel;
import com.thinkbiganalytics.spark.dataprofiler.output.OutputWriter;
import com.thinkbiganalytics.spark.dataprofiler.output.OutputWriterDataSet;
import com.thinkbiganalytics.spark.policy.FieldPolicyLoader;


import org.apache.spark.sql.Row;
import org.apache.spark.sql.types.StructType;
import org.apache.spark.sql.types.StructField;


import org.apache.commons.lang.StringUtils;
import org.apache.spark.sql.SQLContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

//MOB start

import java.io.FileWriter;
import java.io.IOException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;


//MOB end



/**
 * Generate data profile statistics for a table/query, and write result to a table
 */
public class Profiler {

    private static final Logger log = LoggerFactory.getLogger(Profiler.class);

    private FieldPolicyLoader loader;

    private com.thinkbiganalytics.spark.dataprofiler.Profiler profiler;

    private ProfilerConfiguration profilerConfiguration;

    private SparkContextService sparkContextService;

    private SQLContext sqlContext;

    /**
     * Main entry point into program
     *
     * @param args: list of args
     */
    public static void main(String[] args) {
        final ApplicationContext ctx = new AnnotationConfigApplicationContext("com.thinkbiganalytics.spark");
        final Profiler profiler = new Profiler(ctx.getBean(FieldPolicyLoader.class), ctx.getBean(com.thinkbiganalytics.spark.dataprofiler.Profiler.class), ctx.getBean(ProfilerConfiguration.class),
                                               ctx.getBean(SparkContextService.class), ctx.getBean(SQLContext.class));
        profiler.run(args);
    }

    public Profiler(FieldPolicyLoader loader, com.thinkbiganalytics.spark.dataprofiler.Profiler profiler, ProfilerConfiguration profilerConfiguration,
                    SparkContextService sparkContextService, SQLContext sqlContext) {
        this.loader = loader;
        this.profiler = profiler;
        this.profilerConfiguration = profilerConfiguration;
        this.sparkContextService = sparkContextService;
        this.sqlContext = sqlContext;
    }

    public void run(String[] args) {
        /* Variables */
        DataSet resultDF;
        String queryString;

        /* Check command line arguments and get query to run. */
        if ((queryString = checkCommandLineArgs(args)) == null) {
            return;
        }
        Boolean cat;
        cat = true;

        log.info("[PROFILER-INFO] precomma replace Analyzing profile statistics for: [{}]", queryString);
        /* inorder to support comma in sql since arguments are split on comma */
        /* use `comma` in place of comma "," */
        /*next line turns it back to comma */
        queryString = queryString.replace("`comma`", "," );

        log.info("[PROFILER-INFO] profilerConfiguration.actionType: [{}]", profilerConfiguration.actionType);

        if( "dataset".equals(profilerConfiguration.actionType)) {

            String profileOutputTable =  profilerConfiguration.getOutputDbName()+"."+profilerConfiguration.getOutputTableName();
            String dataset_json_file = "/tmp/"+profileOutputTable+".json";

            log.info("[Dataset-INFO] profilerConfiguration.actionType [{}]", profilerConfiguration.actionType );

            log.info("[Dataset-INFO]"+" DROP TABLE IF EXISTS "+ profileOutputTable);
            DataSet notused_df =sparkContextService.sql(sqlContext,"DROP TABLE IF EXISTS "+ profileOutputTable);
            log.info("[Dataset-INFO] "+"DROP TABLE DONE!");


            JSONArray rows = new JSONArray();

            String[] tables = queryString.split("\\|\\|\\|");

            for (String table : tables){

                log.info("[Dataset-INFO] "+"table: " + table);

                JSONObject jsonObject = new JSONObject();

                jsonObject.put("Dataset_Name", table);
                String sql_str = "Select count(*) as count from "+table;
                log.info("[Dataset-INFO] start get count");
                DataSet countDF = sparkContextService.sql(sqlContext, sql_str);

                List<Row> countRows = countDF.collectAsList();
                Long recordCount = countRows.get(0).getLong(0);
                log.info("[Dataset-INFO] count [{}]",  recordCount);


                jsonObject.put("Record_Count", recordCount);


                /* Run query and get result limit one cause only interested in schema*/

                sql_str = "Select * from " + table + " limit 1";
                log.info("[Dataset-INFO] start get schema");
                DataSet schemaDF = sparkContextService.sql(sqlContext, sql_str);

                log.info("[Dataset-INFO] schema: [{}]", schemaDF.schema().treeString());
                StructField fields[] = schemaDF.schema().fields();

                for (StructField f : fields) {
                    //Do your stuff here
                    log.info("[PROFILER-INFO] schema  field name: [{}]", f.name());
                    log.info("[PROFILER-INFO] schema  field type: [{}]", f.dataType());
                    log.info("[PROFILER-INFO] schema  field type.simpleString(): [{}]", f.dataType().simpleString());
                    log.info("[PROFILER-INFO] schema  field is IntegerType: [{}]", f.dataType().simpleString() == "int");

                    // tinyint, bigint, int     double      string  binary
                }


                jsonObject.put("Field_Count", 9);
                jsonObject.put("Text_Count", 4);
                jsonObject.put("Numeric_Count", 4);
                jsonObject.put("Boolean_Count", 1);

                rows.add(jsonObject);


            }





            // try-with-resources statement based on post comment below :)
            try (FileWriter file = new FileWriter(dataset_json_file)) {
                file.write(rows.toJSONString());
                log.info("[Dataset-INFO]"+"Successfully Copied JSON Object to File...[{}]", dataset_json_file);
                log.info("[Dataset-INFO]"+"JSON Object: " + rows);
            } catch (Exception e) {
                log.info("[Dataset-INFO]"+ "Failed to write file.");
                e.printStackTrace();
            }






            //sparkContextService.sql(sqlContext, "CREATE TABLE IF NOT EXISTS src (Dataset_Name STRING, Record_Count STRING)");


            DataSet df = sparkContextService.toDataSet(sqlContext.read()
                    .json("file://"+dataset_json_file));
            df.write().mode("overwrite").saveAsTable(profileOutputTable);



        } else {
            /* Run query and get result */
            log.info("[PROFILER-INFO] Analyzing profile statistics for: [{}]", queryString);
            resultDF = sparkContextService.sql(sqlContext, queryString);

            log.info("[PROFILER-INFO] schema: [{}]", resultDF.schema().treeString());
            StructField fields[] = resultDF.schema().fields();

            for (StructField f : fields) {
                //Do your stuff here
                log.info("[PROFILER-INFO] schema  field name: [{}]", f.name());
                log.info("[PROFILER-INFO] schema  field type: [{}]", f.dataType());
                log.info("[PROFILER-INFO] schema  field type.simpleString(): [{}]", f.dataType().simpleString());
                log.info("[PROFILER-INFO] schema  field is IntegerType: [{}]", f.dataType().simpleString() == "int");
                if (f.dataType().simpleString() == "int") {
                    String sql_str = "SELECT percentile(npi_all." + f.name() + ", 0.05) as " + f.name() + "_5_percent ";
                    sql_str += ", percentile(npi_all." + f.name() + ", 0.25) as " + f.name() + "_25_percent ";
                    sql_str += ", percentile(npi_all." + f.name() + ", 0.50) as " + f.name() + "_median ";
                    sql_str += ", percentile(npi_all." + f.name() + ", 0.75) as " + f.name() + "_75_percent ";
                    sql_str += ", percentile(npi_all." + f.name() + ", 0.95) as " + f.name() + "_95_percent ";
                    sql_str += " FROM `nppes`.`npi_entity` npi_all ";
                    sql_str += " INNER JOIN `testing`.`jsonnpilisttable` npi_subset ON ";
                    sql_str += "npi_subset.`npi` = npi_all.`npi`";
                    log.info("MOB percentile Part A");
                    DataSet percentileDF = sparkContextService.sql(sqlContext, sql_str);
                    log.info("MOB percentile Part B");

                    List<Row> rows = percentileDF.collectAsList();

                    log.info("MOB percentile Part C");
                    //.map(_.toSeq);
                    log.info("MOB percentile [{}]", rows.toArray()[0]);
                    profilerConfiguration.addAdvancedStats(f.name(), rows.get(0));

                    log.info("MOB percentile 0.05 Value [{}]", rows.get(0).get(0));
                    log.info("MOB percentile 0.05 Double Value [{}]", rows.get(0).getDouble(0));
                    log.info("MOB percentile 0.25 Value [{}]", rows.get(0).get(1));
                    log.info("MOB percentile 0.25 Double Value [{}]", rows.get(0).getDouble(1));


                }


                //resultDF.schema().
            }


            //MOB todo: remove return;
            if (cat) {
                //return;
            }


            /* Get profile statistics and write to table */
            final StatisticsModel statisticsModel = profiler.profile(resultDF, profilerConfiguration);

            if (statisticsModel != null) {
                OutputWriter.writeModel(statisticsModel, profilerConfiguration, sqlContext, sparkContextService);
            } else {
                log.info("[PROFILER-INFO] No data to process. Hence, no profile statistics generated.");
            }

            /* Wrap up */
            log.info("[PROFILER-INFO] Profiling finished.");

        }
    }

    /**
     * Check command line arguments
     *
     * @param args list of command line arguments
     * @return query to run (null if invalid arguments)
     */
    @Nullable
    private String checkCommandLineArgs(final String[] args) {
        if (log.isInfoEnabled()) {
            log.info("Running Spark Profiler with the following command line {} args (comma separated): {}", args.length, StringUtils.join(args, ","));
        }

        if (args.length < 5) {
            log.error("Invalid number of command line arguments ({})", args.length);
            showCommandLineArgs();
            return null;
        }

        String retVal = "";

        String profileObjectType = args[0];
        String profileObjectDesc = args[1];
        Integer n = Integer.valueOf(args[2]);
        String profileOutputTable = args[3];
        String fieldPolicyJsonPath = args[4];
        String npi_list_json_file = args[4];
        profilerConfiguration.actionType = args[0];
        if(profileObjectType != "npilist" ) {

        } else {
        }

        String inputAndOutputTablePartitionKey = "ALL";

        if (args.length >= 6) {
            inputAndOutputTablePartitionKey = args[5];
        }

        switch (profileObjectType) {
            case "table":

                Map<String, FieldPolicy> policyMap = loader.loadFieldPolicy(fieldPolicyJsonPath);
                // Quote source table
                final String[] tableRef = profileObjectDesc.split("\\.", 2);
                final String safeTable = tableRef.length == 1 ? HiveUtils.quoteIdentifier(tableRef[0]) : HiveUtils.quoteIdentifier(tableRef[0], tableRef[1]);

                // Create SQL
                List<String> profiledColumns = new ArrayList<>();
                for (FieldPolicy fieldPolicy : policyMap.values()) {
                    if (fieldPolicy.isProfile()) {
                        profiledColumns.add(HiveUtils.quoteIdentifier(fieldPolicy.getField().toLowerCase()));
                    }
                }

                if (!profiledColumns.isEmpty()) {
                    retVal = "select " + StringUtils.join(profiledColumns, ',') + " from " + safeTable;
                    if (inputAndOutputTablePartitionKey != null && !"ALL".equalsIgnoreCase(inputAndOutputTablePartitionKey)) {
                        retVal += " where " + HiveUtils.quoteIdentifier(profilerConfiguration.getInputTablePartitionColumnName()) + " = " + HiveUtils.quoteString(inputAndOutputTablePartitionKey);
                    }
                } else {
                    retVal = null;
                }
                break;
            case "query":
                retVal = profileObjectDesc;
                break;
            case "dataset":
                retVal = profileObjectDesc;
                break;
            case "npilist":
                log.info("npilist getCSV file case.");
                log.error("havenot coded for npilist yet: for object type ({})", profileObjectType);
                log.info("npilist getCSV file start.");
                log.info("[PROFILER-INFO] npilist getCSV file start.");
                //MOB toDO: 

                log.info("npilist:"+"DROP TABLE IF EXISTS "+ profileOutputTable);
                DataSet notused_df =sparkContextService.sql(sqlContext,"DROP TABLE IF EXISTS "+ profileOutputTable);
                log.info("npilist:"+"DROP TABLE DONE!");
                DataSet df = sparkContextService.toDataSet(sqlContext.read()
                .json("file://"+npi_list_json_file));
                df.write().mode("overwrite").saveAsTable("testing.jsonnpilisttable");
                //todo: MOB create random num for end of new table to prevent jobs overwriting each other.
                log.info("[PROFILER-INFO] npilist getCSV file END. val df = sqlContext.read DONE");
                log.info("npilist getCSV file END.");
                retVal = "SELECT npi_all.npi, npi_all.`entity_type`, npi_all.`gender`, npi_all.`ingroup`, ";
                retVal += "npi_all.`org_subpart`, npi_all.`soleprop`FROM `nppes`.`npi_entity` npi_all ";
                retVal += " INNER JOIN `testing`.`jsonnpilisttable` npi_subset ON ";
                retVal += "npi_subset.`npi` = npi_all.`npi`";
                break;
            default:
                log.error("MOB Illegal command line argument for object type ({})", profileObjectType);
                showCommandLineArgs();
                return null;
        }

        if (n <= 0) {
            log.error("Illegal command line argument for n for top_n values ({})", n);
            //MOB fourcing to default value of 10 when bad param sent instead of fail:
            //MOB  showCommandLineArgs();
            //MOB return null;
            profilerConfiguration.setNumberOfTopNValues(10);

        } else {
            profilerConfiguration.setNumberOfTopNValues(n);
        }

        if (!setOutputTableDBAndName(profileOutputTable, profilerConfiguration)) {
            log.error("Illegal command line argument for output table ({})", profileOutputTable);
            showCommandLineArgs();
            return null;
        }

        profilerConfiguration.setInputAndOutputTablePartitionKey(inputAndOutputTablePartitionKey);

        return retVal;
    }


    /*
     * Set output database and table
     */
    private boolean setOutputTableDBAndName(@Nonnull final String profileOutputTable, @Nonnull final ProfilerConfiguration profilerConfiguration) {

        Boolean retVal = true;
        String[] tableNameParts = profileOutputTable.split("\\.");

        if (tableNameParts.length == 1) {
            //output db remains as 'default'
            profilerConfiguration.setOutputTableName(tableNameParts[0]);
        } else if (tableNameParts.length == 2) {
            profilerConfiguration.setOutputDbName(tableNameParts[0]);
            profilerConfiguration.setOutputTableName(tableNameParts[1]);
        } else {
            retVal = false;
        }

        return retVal;
    }

    /**
     * Show required command-line arguments.
     */
    private void showCommandLineArgs() {
        log.info("*** \nInfo: Required command line arguments:\n"
                 + "1. object type: valid values are {table, query}\n"
                 + "2. object description: valid values are {<database.table>, <query>}\n"
                 + "3. n for top_n values: valid value is {<integer>}\n"
                 + "4. output table: valid values are {<table>, <database.table>}"
                 + "5. full path to policy file "
                 + "\n"
                 + "Info: Optional command line argument:\n"
                 + "6. partition_key: valid value is {<string>}\n\n"
                 + "(Note: Only alphanumeric and underscore characters for table names and partition key)"
                 + "\n***");
    }
}
