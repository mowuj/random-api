const express = require('express')
const router = express.Router();
const userController =require ('../../controllers/user.controller')
router
    .route('/all')
    .get(userController.getAllUsers)
    .post()
router
    .route('/random')
    .get(userController.randomUser)

module.exports = router;