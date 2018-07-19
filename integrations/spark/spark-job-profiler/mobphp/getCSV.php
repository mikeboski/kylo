<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body>
    <script>
        pagestart = new Date().valueOf();
    </script>    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>

    <script src="http://kylo.proof-of-concepts.com/getProfile.php?table=<?php echo $_REQUEST['table']; ?>" type="text/javascript"></script>
    <script>
        function addToRow(_prop, _metric, _value) {
            if(typeof rows[_prop] == "undefined") {
                rows[_prop] = {};
            }
            rows[_prop][_metric] = _value;
        }
        function addMetricType(_metric) {
            //TOP_N_VALUES can be huge and will make the csv unreadable
            if(_metric == "TOP_N_VALUES") return;
            if(!metrictypes.includes(_metric)) {
                metrictypes.push(_metric);
            }
        }

        var metrictypes = [];
        var rows = {};

        sortstart = new Date().valueOf();
        for(var i =0; i< db_data.rows.length; i++) {
            var row = db_data.rows[i];
            addToRow(row.columnname, row.metricname, row.metricvalue);
            addMetricType(row.metricname);
        }
        metrictypes = metrictypes.sort();
        sortend = new Date().valueOf();
        function csvRow(fieldname, metrics) {
            var str = fieldname +", ";
            for(var i = 0; i<metrictypes.length; i++) {
                var metric = metrictypes[i];
                if(typeof metrics[metric] == "undefined") {
                    str+= ", ";
                } else {
                    //str += '"'+metrics[metric]+'", ';
                    str += metrics[metric]+', ';
                }
            }
            str = str.replace(/(^[,\s]+)|([,\s]+$)/g, '');
            return str+"\n";

        }
        console.log("pagestart:", pagestart,"sortstart:", sortstart, "sortend:", sortend);
        csv = "";
        //create header row
        csv += "Fieldname, "+ metrictypes.join(", ");
        csv = csv.replace(/(^[,\s]+)|([,\s]+$)/g, '') +"\n";
        for(var i in rows) {
            csv += csvRow(i,rows[i]);
        }

        function createdownload(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
            element.innerHTML = "download csv";
            document.body.appendChild(element);
        }
        createdownload("fieldsreport.csv", csv);
       // window.saveAs(csv, "mike.txt");

    </script>
  </body>
</html>