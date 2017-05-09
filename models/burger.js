var orm = require('../config/orm.js');

var burger = {
	selectAll: function() {
    orm.selectAll("burgers");
	},
	insertOne: function(column1, column2, col1value, col2value, callback){
		orm.insertOne("burgers",column1, column2, col1value, col2value, function(res) {
				callback (res)
		});
	},
	updateOne: function(column, valueNew, valueCurrent, callback){
		orm.updateOne("burgers", column, valueNew, valueCurrent,
			function(res) {
				callback (res)
		});
	}
}

module.exports = burger;
