var db = require('../dbconnection');

var Task = {
	getAllTask:function(callback) {
		return db.query("SELECT * FROM task", callback);
	},
	getTaskById: function(id, callback) {
		return db.query("SELECT * FROM task WHERE Id=?",[id], callback);
	}
};

module.exports = Task;