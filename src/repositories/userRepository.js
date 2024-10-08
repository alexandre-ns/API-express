const User = require('../models/user');

class UserRepository {
  async findAll() {
    return User.find();
  }

  async findById(id) {
    return User.findById(id);
  }

  async findByUserName(username) {
    return User.findOne({ username: username });
  }

  async create(user) {
    const newUser = new User(user);
    return newUser.save();
  }

  async update(id, user) {
    return User.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id) {
    return User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();
