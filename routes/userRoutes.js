// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/registerUser', userController.registerUser);
router.post('/login', userController.login);
router.post('/createUser', userController.createUser);
router.get('/getUsers', userController.getUsers);
router.put('/edit/:id', userController.editUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
