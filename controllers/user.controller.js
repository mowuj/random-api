const users = require('../public/users.json')
module.exports.getAllUsers = (req, res, next) => {
    res.json(users)
    
}
