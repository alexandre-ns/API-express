const router = require('express').Router();
const authService = require('../services/authService');

class AuthController {
  async loginUser(req, res) {
    try {
      const user = await authService.loginUser(req.body);
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
  }

  async registerUser(req, res) {
    try {
      const newuser = await authService.registerUser(req.body);
      res.status(201).json(newuser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new AuthController();
