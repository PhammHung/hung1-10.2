const mongoose = require("mongoose");

var StudentSchema = mongoose.Schema();

var studentModel = mongoose.model("student", StudentSchema, "student");

module.exports = studentModel;
