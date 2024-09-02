const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth/userAuth');
const adminAuthMiddleware = require('../middlewares/auth/adminAuth');

router.get('/', adminAuthMiddleware, userController.getAllUsers);
router.get('/:id', authMiddleware, userController.getUserById);
//router.post('/', userController.createProduct);
//router.put('/:id', userController.updateProduct);
router.delete('/:id', userController.deleteUser);

module.exports = router;
