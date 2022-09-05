const express = require('express')
const router = express.Router();
const userController =require ('../../controllers/user.controller')
router
    .route('/all')
    .get(userController.getAllUsers)
    
router
    .route('/save')
    .post(userController.createUser)
   
router.route('/bulk-update')
    .patch(userController.bulkUpdate)
router
    .route('/random')
    .get(userController.randomUser)

router
    .route("/update/:id")
    .patch(userController.updateUser)

router.route('/delete/:id')
    .delete(userController.deleteUser)

module.exports = router;