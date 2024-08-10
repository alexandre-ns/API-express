const userRepository = require("../repositories/userRepository");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

class AuthService {
  async loginUser(userData) {
    const { username, password } = userData;
    const user = await userRepository.findOne({ username });

    if (!user) {
      throw new Error("userNotFound");
    }
    if (!(await bcrypt.compareSync(password, user.password))) {
      throw new Error("InvalidAcess");
    }
   const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT, {
      expiresIn: "1h",
   });
   return token;
   // return { message: "Login successful", user: user.username };
  }

  async registerUser(userData) {
    const hashPassword = bcrypt.hashSync(userData.password, 8);
    const newUser = await userRepository.create({
      ...userData,
      password: hashPassword,
    });
    return newUser
      ? {
          id: updatedUser._id,
          username: updatedUser.username,
        }
      : null;
  }
}

module.exports = new AuthService();


