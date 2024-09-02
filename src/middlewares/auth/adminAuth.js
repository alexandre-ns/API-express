const API_ADMIN_TOKEN = process.env.API_ADMIN_TOKEN;

const adminAuthMiddleware = (req, res, next) => {
  //console.log(ADMIN_TOKEN);
  console.log('authorization', req.headers);
  const token = req.header('token');
  if (!token) {
    return res.status(401).json({ message: 'Access denied.' });
  }

  if (token !== API_ADMIN_TOKEN) {
    return res.status(403).json({ message: 'Invalid staff token.' });
  }

  next();
};

module.exports = adminAuthMiddleware;
