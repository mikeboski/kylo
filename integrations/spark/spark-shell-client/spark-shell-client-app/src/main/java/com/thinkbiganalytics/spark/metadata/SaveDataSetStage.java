package com.thinkbiganalytics.spark.metadata;

/*-
 * #%L
 * kylo-spark-shell-client-app
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

import com.google.common.base.Function;
import com.google.common.base.Preconditions;
import com.thinkbiganalytics.discovery.model.DefaultQueryResultColumn;
import com.thinkbiganalytics.spark.DataSet;
import com.thinkbiganalytics.spark.model.SaveResult;
import com.thinkbiganalytics.spark.model.TransformResult;
import com.thinkbiganalytics.spark.rest.model.SaveRequest;

import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.DataFrameWriter;
import org.apache.spark.sql.types.StructType;

import java.util.Properties;
import java.util.UUID;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

/**
 * Saves a transformation result.
 */
public class SaveDataSetStage implements Function<TransformResult, SaveResult> {

    /**
     * Hadoop FileSystem
     */
    @Nonnull
    private final FileSystem fs;

    /**
     * Save configuration
     */
    @Nonnull
    private final SaveRequest request;

    /**
     * Constructs a {@code SaveDataSetStage} with the specified configuration.
     */
    public SaveDataSetStage(@Nonnull final SaveRequest request, @Nonnull final FileSystem fs) {
        this.request = request;
        this.fs = fs;
    }

    @Nonnull
    @Override
    public SaveResult apply(@Nullable final TransformResult transform) {
        Preconditions.checkNotNull(transform);

        // Configure writer
        final DataFrameWriter writer = getDataSet(transform).write();

        if (request.getFormat() != null) {
            writer.format(request.getFormat());
        }
        if (request.getMode() != null) {
            writer.mode(request.getMode());
        }
        if (request.getOptions() != null) {
            writer.options(request.getOptions());
        }

        // Save transformation
        final SaveResult result = new SaveResult();

        if (request.getJdbc() != null) {
            final Properties properties = new Properties();
            properties.setProperty("driver", request.getJdbc().getDatabaseDriverClassName());
            properties.setProperty("user", request.getJdbc().getDatabaseUser());
            properties.setProperty("password", request.getJdbc().getPassword());

            writer.jdbc(request.getJdbc().getDatabaseConnectionUrl(), request.getTableName(), properties);
        } else if (request.getTableName() != null) {
            writer.saveAsTable(request.getTableName());
        } else {
            final String hadoopTmpDir = fs.getConf().get("hadoop.tmp.dir", "/tmp");
            final Path absolutePath = new Path(hadoopTmpDir, UUID.randomUUID().toString());
            final Path qualifiedPath = fs.makeQualified(absolutePath);
            result.setPath(qualifiedPath);
            writer.save(qualifiedPath.toString());
        }

        return result;
    }

    /**
     * Gets the data set for the specified transformation result.
     */
    private DataSet getDataSet(@Nonnull final TransformResult transform) {
        DataSet dataset = transform.getDataSet();

        if (request.getFormat() != null && request.getFormat().equals("orc")) {
            // Ensure that column names comply with ORC standards
            final StructType schema = dataset.schema();
            final Column[] columns = new Column[schema.size()];
            final DefaultQueryResultColumn[] queryColumns = new QueryResultRowTransform(schema, "orc").columns();

            for (int i = 0; i < schema.size(); ++i) {
                if (!queryColumns[i].getField().equals(schema.apply(i).name())) {
                    columns[i] = new Column(schema.apply(i).name()).as(queryColumns[i].getField());
                } else {
                    columns[i] = new Column(schema.apply(i).name());
                }
            }

            dataset = dataset.select(columns);
        }

        return dataset;
    }
}
