const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema({
    email: {
        type:String,
    },
    code: {
        type:Number,
    },
    expireIn: {
        type:String,
    },   
},

    { timestamps: true }

);

const Otp = mongoose.model('OTP', otpSchema);

module.exports = Otp;