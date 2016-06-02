var fileIO_password = 'ICS4U';

function writeFile(filename, data, callback) {
	// LOOK INTO $_SERVER['HTTP_REFERER'] ON THE PHP END

	// Gather info
	var url = 'http://www.erik-koopmans.com/fieldstone2016/writeFile.php';
	var info = {filename: filename, data: data, password: fileIO_password};

	// Call the PHP script to write the file
	$.post(url, info).then( parseJSON.bind(this,callback) );
}

function readFile(filename, callback) {
	// Gather info
	var url = 'http://www.erik-koopmans.com/fieldstone2016/readFile.php';
	var info = {filename: filename, password: fileIO_password};

	// Call the PHP script to read the file
	$.post(url, info).then( parseJSON.bind(this,callback) );
}

function listenFile(filename, callback) {
	// Gather info
	var url = 'http://www.erik-koopmans.com/fieldstone2016/listenFile.php';
	var info = {filename: filename, password: fileIO_password};

	// Call the PHP script to read the file
	$.post(url, info).then( parseJSON.bind(this,callback) );
}

function parseJSON(callback, data) {
	// Parse the returned JSON data if possible
	try			{data = JSON.parse(data);}
	catch(e)	{}
	callback(data);
}
