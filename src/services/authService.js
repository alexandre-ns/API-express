const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret = process.env.SECRET_JWT;

class AuthService {
  async loginUser(userData) {
    const { username, password } = userData;
    const user = await userRepository.findByUserName(username);

    if (!user) {
      console.log('usuario n encontrado');
    }
    if (!(await bcrypt.compareSync(password, user.password))) {
      console.log('login errado');
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT, {
      expiresIn: '1h'
    });
    return token;
  }

  async checkToken(token) {
    try {
      const decoded = jwt.verify(token, jwtSecret);
      return decoded;
    } catch (error) {
      //console.log(error);
      throw error;
    }
  }

  async registerUser(userData) {
    const hashPassword = bcrypt.hashSync(userData.password, 8);
    const newUser = await userRepository.create({
      ...userData,
      password: hashPassword
    });
    return newUser
      ? {
          id: updatedUser._id,
          username: updatedUser.username
        }
      : null;
  }
}

module.exports = new AuthService();
