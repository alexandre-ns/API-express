const jwt = require('jsonwebtoken');
const User = ('../models/user');
const tokenApi = process.env.SECRET_JWT;

const authMiddleware = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }
    const decoded = jwt.verify(token, tokenApi);
    next();

};

module.exports = authMiddleware;