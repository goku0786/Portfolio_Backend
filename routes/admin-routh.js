const express = require("express");
const authMiddleware = require("../middleware/authMiddleware")
const adminMiddleware = require("../middleware/admin-middleware")
const adminController = require("../controllers/admin-contoller");

const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router.route('/users/:id').get(authMiddleware, adminMiddleware, adminController.getUserById);

router.route('/users/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserById)

router.route('/contacts').get(authMiddleware, adminController.getAllContacts);

router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

module.exports = router;

