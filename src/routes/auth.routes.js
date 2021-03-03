const { Router } = require('express');
const userController = require('../controllers/auth.controller');

const router = new Router();
module.exports = router;

router.post('/login', userController.login);
router.post('/register', userController.register);

