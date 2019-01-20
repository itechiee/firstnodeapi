const { check, validationResult  } = require('express-validator/check')

exports.getTaskById = function(req, res, next){
	req.check('id','ID should be numeric').isNumeric();
	var errors = req.validationErrors();
	if (errors) {
		res.send(JSON.stringify({"status": 422, "error": errors, "response": null}));
	}
	next();
}
