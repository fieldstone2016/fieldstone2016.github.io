<?php

// Allow this proxy to be accessed from anywhere
header("Access-Control-Allow-Origin: *");

// Check the password
$password = $_POST['password']	or die('No password given.');
if ($password != 'ICS4U')		die('Invalid password.');

// Gather necessary info
$filename = $_POST['filename']	or die('No filename specified.');
$data = $_POST['data']			or die('No data specified.');

// Write info to file
file_put_contents($filename, json_encode($data,TRUE))	or die('Write failed.');

?>
