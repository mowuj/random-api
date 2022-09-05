let users = require('../public/users.json')
const fs =require('fs')

module.exports.getAllUsers = (req, res, next) => {
    res.json(users)
    
}
module.exports.createUser = (req, res, next)=>{
    fs.readFile('file.json', 'utf8', (err, content) => {
        if (err) throw err
    let data = JSON.parse(content)
    const dt=req.body
    data.push(dt)

    fs.writeFile('file.json', JSON.stringify(data, null, 2), (err) => {
        if (err) throw err
        else {
            res.send(content)
        }
    })
    })   
}

module.exports.updateUser = (req, res, next) => {
    const { id } = req.params;

    const updatedUser=users.find(user=>user.id===Number(id))
    updatedUser.id = id;
    updatedUser.gender=req.body.gender
    updatedUser.name = req.body.name;
    updatedUser.contact = req.body.contact;
    updatedUser.address = req.body.address;   
    res.send(updatedUser);
}

module.exports.deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== Number(id));
    res.send(users)
}

module.exports.randomUser = (req, res, next) => {
    const randomId = Math.floor(Math.random() * users.length)
    console.log("random",randomId)
    
    if (randomId ==0) {
       res.send("Please Try Again")
    } else {
         const found = users.find(user => user.id == randomId) 
        res.send(found)
    }
 
}