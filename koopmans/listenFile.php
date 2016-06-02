<?php

// Allow this proxy to be accessed from anywhere
header("Access-Control-Allow-Origin: *");
header("Access-Control-Max-Age: 86400");

// Check the password
$password = $_POST['password']	or die('No password given.');
if ($password != 'ICS4U')		die('Invalid password.');

// Gather necessary info
$filename = $_POST['filename']	or die('No filename specified.');

// Get the file's current state, then wait for the file to be changed
$initialTime = filemtime($filename);
while (filemtime($filename)==$initialTime)	sleep(1);

// Return the file contents
// $data = json_decode(file_get_contents($filename),TRUE)	or die('Read failed.');
$data = file_get_contents($filename)	or die('Read failed.');
echo $data;

?>
