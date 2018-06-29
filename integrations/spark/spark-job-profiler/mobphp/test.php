<?php
$username = "dladmin";
$password = "thinkbig";
$process = curl_init("http://kylo.proof-of-concepts.com:8400/proxy/v1/hive/query-result?query=Select%20*%20from%20nppes.npi_entity_mob_11_limited_profile");
curl_setopt($process, CURLOPT_HTTPHEADER, array('Content-Type: application/json', $additionalHeaders));
curl_setopt($process, CURLOPT_HEADER, 0);
curl_setopt($process, CURLOPT_USERPWD, $username . ":" . $password);
curl_setopt($process, CURLOPT_TIMEOUT, 30);
echo curl_exec($process);
curl_close($process);