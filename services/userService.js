const express = require('express');
const UserRepository = require("../repositories/productRepository");
const jwt = require('jsonwebtoken');
const router = express.Router();

class UserService {
  async getAllUsers() {
    const users = await UserRepository.findAll();
    return users.map((user) => ({
      id: user._id,
      username: user.username,
    }));
  }

  async getUserById(id) {
    const user = await UserRepository.findById(id);
    return user
      ? {
          id: user._id,
          username: user.username,
        }
      : null;
  }

  async createUser(userData) {
    const user = await UserRepository.create(userData);
    return user
      ? {
          id: user._id,
          username: user.username,
        }
      : null;
  }

  async loginUser(userData) {
    const { username, password } = userData;
    const user = await UserRepository.findOne({ username });

    if (!user) {
      throw new Error("UserRepositoryNotFound");
    }
    if (!(await user.comparePassword(password))) {
      throw new Error("InvalidAcess");
    }
    return { message: "Login successful", user: user.username };
  }

  async updateUpdate(id, userData) {
    const updatedUser = await UserRepository.update(id, userData);
    return updatedUser
      ? {
          id: updatedUser._id,
          username: updatedUser.username
        }
      : null;
  }

  async deleteUser(id) {
    const user = await UserRepository.findByIdAndDelete(id);

    return updatedUser
      ? {
          id: updatedUser._id,
          username: updatedUser.username,
        }
      : null;
  }
}

module.exports = new UserService();
