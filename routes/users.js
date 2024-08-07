const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/auth/auth')

router.get('/', userController.getAllUsers);
router.post('/login', userController.loginUser);
router.post('/register',authMiddleware,  userController.registerUser);
//router.post('/', userController.createProduct);
//router.put('/:id', userController.updateProduct);
router.delete('/:id', userController.deleteUser);

module.exports = router;