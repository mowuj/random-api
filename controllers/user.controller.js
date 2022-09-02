const users = require('../public/users.json')
module.exports.getAllUsers = (req, res, next) => {
    res.json(users)
    
}
module.exports.randomUser = (req, res, next) => {
    // const { id } = req.params;
    // console.log(id);
    const randomId = Math.floor(Math.random() * users.length)
    console.log("random",randomId)
    
    if (randomId ==0) {
       res.send("Please Try Again")
    } else {
         const found = users.find(user => user.id == randomId) 
        res.send(found)
    }

    
}