var orm = require('../config/orm.js');

var burger = {
	selectAll: function(table) {
    orm.selectAll("burgers");
	},
	insertOne: function(table, column1, column2, col1value, col2value){
		orm.insertOne("burgers",column1, column2, col1value, col2value)
	},
	updateOne: function(table, column, valueNew, valueCurrent){
		orm.updateOne("burgers", column, valueNew, valueCurrent
			)
	}
}

module.exports = burger;
