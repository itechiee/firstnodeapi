var Task = require('../models/Task');

exports.getAllTask = function(req, res) {
	Task.getAllTask(function(err, task) {
		if (err) {
			res.send(JSON.stringify({"status": 400, "error": null, "response": err}));
		} else {
			res.send(JSON.stringify({"status": 200, "error": null, "response": task}));
		}
	})
}

exports.getTaskById = function(req, res) {
	Task.getTaskById(req.params.id, function(err, task) {
		if (err) {
			res.send(JSON.stringify({"status": 400, "error": null, "response": err}));
		} else {
			res.send(JSON.stringify({"status": 200, "error": null, "response": task}));
		}
	})
}