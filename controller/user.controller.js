const User = require("../models/user.model");
const createUser = (req, res) => {
	User.create(req.connection, req.body, (err) => {
		if (!err) {
			res.send({ success: true, data: null, message: "User Created Successfully!" });
		} else {
			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
		}
	});
};
const getAllUsers = (req, res) => {
	User.getAll(req.connection, (err, rows) => {
		if (rows.length > 0) {
			res.send({ success: true, data: rows, message: "Users data retrieved Successfully!" });
		} else {
			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
		}
	});
};
const getUserById = (req, res) => {
	User.getOne(req.connection, req.params.id, (err, rows) => {
		if (rows.length > 0) {
			res.send({ success: true, data: rows, message: "Users data retrieved Successfully!" });
		} else {
			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
		}
	});
};
const updateUser = (req, res) => {
	User.update(req.connection, req.params.id, req.body, (err) => {
		if (!err) {
			res.send({ success: true, data: null, message: "User Updated Successfully!" });
		} else {
			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
		}
	});
};
const deleteUser = (req, res) => {
	User.remove(req.connection, req.params.id, (err) => {
		if (!err) {
			res.send({ success: true, data: null, message: "User Deleted Successfully!" });
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
