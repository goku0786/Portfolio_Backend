const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});



// secure the password with the bcrypt
userSchema.pre('save', async function () {
    console.log('pre method', this);
});

// compare the password 
userSchema.methods.comparePassword = async function (password) {
    return await  bcrypt.compare(password, this.password);
}

// json web token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
            process.env.JWT_SECRET_KEY
        );
    } catch (error) {
        console.error(error);
    }
}

// define the model or the collection name 
const User = new mongoose.model("User", userSchema);
module.exports = User;