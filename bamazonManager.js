var inquirer = require('inquirer');
var mysql = require('mysql');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'passroot',
	database: 'bamazon_db'
});

// promptManagerAction will present menu options to the manager and trigger appropriate logic
function promptManagerAction() {

	// Prompt the manager to select an option

    // .then conditional statements to run through manager functions
};