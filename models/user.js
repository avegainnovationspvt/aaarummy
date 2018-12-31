var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    googleUserId: {
        type: String,
        default: ''
    },
    wallet : {
        type: Number,
        default: 0
    },
    contact: {
        type: String
    },
    password: {
        type: String
    }
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);

