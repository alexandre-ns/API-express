const jwt = require('jsonwebtoken');

const payload = { id: 123, role: 'admin' };
const secret = 'testedaminhaapi';

// Gerar um token JWT
const token = jwt.sign(payload, secret);
console.log('Generated Token:', token);