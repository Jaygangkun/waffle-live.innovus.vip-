var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require("http");
setting_detail = {};

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// if (process.env.NODE_ENV == 'production') {
//     var cluster = require('cluster');
//     if (cluster.isMaster) {
//         // Count the machine's CPUs
//         var cpuCount = require('os').cpus().length;

//         // Create a worker for each CPU
//         for (var i = 0; i < cpuCount; i += 1) {
//             cluster.fork();
//         }

// // Code to run if we're in a worker process
//     } else {
//         init();
//     }
// } else {
//     init();
// }

init();

function init() {
	var pkg = require('./package.json');
	
	/*var Greenlock = require("greenlock");
	greenlock = Greenlock.create({
	    configDir: './greenlock.d/config.json',
	    staging: true,	 
	    packageRoot: __dirname,
	    maintainerEmail: 'jon@example.com',
	    packageAgent: pkg.name + '/' +pkg.version,
	    notify: function(event, details) {
	        if ('error' === event) {
	            // `details` is an error object in this case
	            console.error(details);
	        }
	    }
	});*/
	
 
	
	var config = require('./config/config'),
	        mongoose = require('./config/mongoose'),
	        express = require('./config/express'),
	        db = mongoose(),
	        app = express();
	const port = '8000';
	app.listen(port);
	
	var Setting = require('mongoose').model('setting');
	Setting.findOne({}, function (error, setting) {
	    setting_detail = setting
	    var admin = require("firebase-admin");
	    //var serviceAccount = require("./app/utils/service_account.json");
		var serviceAccount = {
		    "type": setting_detail.type,
		    "project_id": setting_detail.project_id,
		    "private_key_id": setting_detail.private_key_id,
		    "private_key": setting_detail.private_key,
		    "client_email": setting_detail.client_email,
		    "client_id": setting_detail.client_id,
		    "auth_uri": setting_detail.auth_uri,
		    "token_uri": setting_detail.token_uri,
		    "auth_provider_x509_cert_url": setting_detail.auth_provider_x509_cert_url,
		    "client_x509_cert_url": setting_detail.client_x509_cert_url
		};

		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			databaseURL: setting_detail.databaseURL
		});

		fireDB = admin.database();

	    console.log('Magic happens on port ' + port); 
	});		
	exports = module.exports = app;
}
