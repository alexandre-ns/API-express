const jwt = require('jsonwebtoken');

const payload = { id: '', role: '' };
const secret = '';

const token = jwt.sign(payload, secret);
