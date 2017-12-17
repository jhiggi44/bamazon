var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2Nephi3120',
    database: 'bamazon_db',
});


// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;

    connection.query("SELECT item_id, product_name, price FROM Products", function (err, results) {
        for (var i = 0; i < results.length; i++) {
            console.log("\nProduct: " + results[i].product_name);
            console.log("Price: " + results[i].price);
            console.log("Item Id: " + results[i].item_id);
            console.log("---------------")
        }
        // run the start function after the connection is made to prompt the user
        buySomething();
    });

});

// function which prompts the user for what action they should take
function buySomething() {
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([{
                name: "whichItem",
                type: "input",
                message: "Which item (type in Item Id, please) would you like to buy?"
            },
            {
                name: "howMany",
                type: "input",
                message: "How many would you like to buy?"
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "SELECT product_name, stock_quantity FROM Products WHERE ?", {
                    item_id: answer.whichItem
                },
                function (err, results) {

                    if (answer.howMany > results[0].stock_quantity) {
                        console.log("We don't have that many in stock... Sorry!")
                        // run program again
                        buySomething();
                    } else {

                        var newQuantity = parseInt(results[0].stock_quantity) - parseInt(answer.howMany);
                        //console.log(newQuantity);
                        connection.query(
                            "UPDATE Products SET ? WHERE ?", [{
                                    stock_quantity: newQuantity
                                },
                                {
                                    item_id: answer.whichItem
                                }
                            ],
                            function () {
                                console.log("Thanks for shopping. A Drone is on its way to drop off your order.")
                                // run program again
                                buySomething();
                            });
                    }
                }
            );
        });
}