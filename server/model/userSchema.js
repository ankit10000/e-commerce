const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    contactnumber: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    confirmPassword: {
        type:String,
        required:true,
    },
    tokens:    [{
        token: {
            type:String,
            required:true,
        }
    }]
})

userSchema.pre('save', async function (next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12)
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12)
    }
    next();
})


userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token;
    } catch (err) {
        console.log(err)
    }
}

const Signup = mongoose.model('SIGNUP', userSchema);

module.exports = Signup;