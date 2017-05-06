var orm = require("./connection.js");

var orm = {
	selectAll: function(table) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      console.log(result);
    });
	},
	insertOne: function(table, column1, column2, col1value, col2value){
		var queryString = "INSERT INTO ?? ( ?? ?? ) VALUES ( ? ? )";
    connection.query(queryString, [table, column1, column2, col1value, col2value], function(err, result) {
      console.log(result);
    });
	},
	updateOne: function(table, column, valueNew, valueCurrent){
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [table, column, valueNew, valueCurrent], function(err, result) {
      console.log(result);
    });
	}
}

module.exports = orm;