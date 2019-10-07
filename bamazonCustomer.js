var inquirer = require('inquirer');
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,


    user: 'root',

    password: 'passroot',
    database: 'bamazon_DB'
});

function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
};


function promptUserPurchase() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'item_id',
            message: 'Please enter the Item ID which you would like to purchase.',
            validate: validateInput,
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many do you need?',
            validate: validateInput,
            filter: Number
        }
    ]).then(function (input) {

        var item = input.item_id;

        var quantity = input.quantity;

        connection.query(queryStr, { item_id }, function (err, data) {
            if (err) throw err;

            if (data.length === 0) {
                console.log("Error, invalid Item ID. Please select a valid Item ID.");
                displayInventory();
            } else {
                var productData = data[0];

                if (quantity <= productData.stock_quantity) {
                    console.log("Congratulations! The product you selected is in stock! Preparing your order now!");

                    var updateQueryStr = 'UPDATE products SET stock_quantity = '(productData.stock_quantity - quantity) + 'WHERE item_id = ' + item;

                    connection.query(updateQueryStr, function (err, data) {
                        if (err) throw err;

                        console.log(`
   --------------- 
Your Order has been placed!
Your total is ${productData.price * quantity}
Thank You for shopping with us!
   ---------------`);
                        connection.end();
                    });
                } else {
                    console.log(`
    ----------------
Sorry, there is not enough porduct in stock, 
your order can not be placed as is.
Please modify your order.
    ----------------`);

                    displayInventory();
                };
            };
        });
    });

};

function displayInventory(){

    queryStr = 'SELECT * FROM products';

    connection.query(queryStr, function(err, data){
        if (err) throw err;

        console.log(`
Existing Inventory:
--------------------`);
        var strOut = "";
        for (var i = 0; i < data.length; i++){
            strOut = '';
            strOut += 'Item ID: ' + data[i].item_id + ' // ';
            strOut += 'Product Name: ' + data[i].product_name + ' // ';
            strOut += 'Department: ' + data[i].department_name + ' // ';
            strOut += 'Price: $' + data[i].price + '\n';
            
            console.log(strOut);
            };
        console.log(`
---------------------`);
            promptUserPurchase();
    });
};

function runBamazon(){

    displayInventory();
};

runBamazon();