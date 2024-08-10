const router = require("express").Router();
const userService = require("../services/userService");

class UserController {

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }


  /*REVIEW -  async registerUser(req, res) {
    try {
        const newuser = await userService.createUser(req.body);
        res.status(201).json(newuser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
  }*/


  /*async loginUser(req, res) {
    try {
        const user = await userService.loginUser(req.body);
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
  }*/

  async deleteUser(req, res) {
    try {
      const user = await userService.deleteUser(req.params.id);
      res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ message: 'User not found' });
    }
  }
}

module.exports = new UserController();