const mongoose = require("mongoose");
const { stringify } = require("querystring");

var StudentSchema = mongoose.Schema({
    name : String,
    age: Number,
    email: String,
});

var studentModel = mongoose.model("student", StudentSchema, "student");

module.exports = studentModel;
