<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$username = "dladmin";
$password = "thinkbig";
$table = $_REQUEST['table'];
$process = curl_init("http://kylo.proof-of-concepts.com:8400/proxy/v1/hive/query-result?query=Select%20*%20from%20analytics.".$table);
curl_setopt($process, CURLOPT_HTTPHEADER, array('Content-Type: application/json', $additionalHeaders));
curl_setopt($process, CURLOPT_HEADER, 0);
curl_setopt($process, CURLOPT_USERPWD, $username . ":" . $password);
curl_setopt($process, CURLOPT_TIMEOUT, 30);
curl_setopt($process, CURLOPT_RETURNTRANSFER, 1);
echo "var db_data = ";
echo curl_exec($process);
echo ";";
curl_close($process);