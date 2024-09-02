const jwt = require('jsonwebtoken');
const authService = require('../../services/authService');

const authMiddleware = async (req, res, next) => {
  //console.log('authorization', req.headers);
  const authorization = req.headers['authorization'];

  if (!authorization) {
    return res.status(403).json({ message: 'No token provided' });
  }
  console.log(authorization.split(' ')[1]);
  try {
    token = authorization.split(' ')[1];
    const decoded = await authService.checkToken(token);
    console.log('decoded-->', decoded);
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = authMiddleware;
