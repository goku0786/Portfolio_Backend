const express = require('express');
const authController = require('../controllers/auth-controller');
const router = express.Router();
const { signupSchema, loginSchema } = require('../validators/auth-validator');
const validate = require('../middleware/validate-middleware');
const authMiddleware = require('../middleware/authMiddleware')

router.route('/').get(authController.home);
router.route('/register').post(validate(signupSchema), authController.register);
router.route('/login').post(validate(loginSchema), authController.login);
router.route('/user').get(authMiddleware, authController.user);

module.exports = router;