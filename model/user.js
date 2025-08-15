const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String,required:{value: true, message: "Name is require"}},
    email: { type: String, required: {value: true, message:"Email is required"}, unique: {value: true, message:"Email must be unique"} },
    password: { type: String, required: {value: true, message:"Password is required"} }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
