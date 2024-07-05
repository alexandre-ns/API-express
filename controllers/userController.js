const router = require("express").Router();
const userServices = require("../services/userServices");


exports.getAllUsers = async (req, res) => {
    try {
      console.log("entrou controller");
      const users = await userServices.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};


exports.registerUser = async (req, res) => {
    try {
        console.log("entrou controller create");
        const newuser = await userServices.registerUser(req.body);
        res.status(201).json(newuser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.loginUser = async (req, res) => {
    try {
        const user = await userServices.loginUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        if (error.message === 'UserNotFound') {
            return res.status(404).json({ message: 'User not found' });
          }
          if (error.message === 'InvalidAcess') {
            return res.status(401).json({ message: 'Invalid credentials' });
          }
          res.status(500).json({ message: 'Internal server error' });
    }
};

