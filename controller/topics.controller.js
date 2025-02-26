const Topics = require("../models/topics.model");
const createUser = (req, res) => {
	Topics.create(req.connection, req.body, (err) => {
		if (!err) {
			res.send({ success: true, data: null, message: "Topic Created Successfully!" });
		} else {
			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
		}
	});
};
const getAllUsers = (req, res) => {
	Topics.getAll(req.connection, (err, rows) => {
		if (rows.length > 0) {
			res.send({ success: true, data: rows, message: "Topics data retrieved Successfully!" });
		} else {
			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
		}
	});
};
const getUserById = (req, res) => {
	Topics.getOne(req.connection, req.params.id, (err, rows) => {
		if (rows.length > 0) {
			res.send({ success: true, data: rows, message: "Topics data retrieved Successfully!" });
		} else {
			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
		}
	});
};
const updateUser = (req, res) => {
	Topics.update(req.connection, req.params.id, req.body, (err) => {
		if (!err) {
			res.send({ success: true, data: null, message: "Topic Updated Successfully!" });
		} else {
			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
		}
	});
};
const deleteUser = (req, res) => {
	Topics.remove(req.connection, req.params.id, (err) => {
		if (!err) {
			res.send({ success: true, data: null, message: "Topic Deleted Successfully!" });
		} else {
			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
		}
	});
};
module.exports = {
	createUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
};
