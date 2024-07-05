const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();


exports.getAllUsers = async () => {
    console.log("entrou service");
    return await User.find();
    console.log("saiu service");
};  

exports.registerUser = async (UserData) => {
    const user = new User(UserData);
    return await user.save();
};

exports.loginUser = async (UserData) => {
    const { username, password } = UserData;
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error('UserNotFound');
    }
    if (!(await user.comparePassword(password))) {
        throw new Error('InvalidAcess');
    }
    console.log("--> password certo")
    return { message: 'Login successful', userId: user._id };

};