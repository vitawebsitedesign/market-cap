<?php

$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$url = 'http://data.asx.com.au/data/1/company/' . $_GET['tkr'] . '?fields=primary_share';
curl_setopt($ch, CURLOPT_URL, $url);

$res = curl_exec($ch);
echo $res;