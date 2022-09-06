
const fs =require('fs')
let users=require('../file.json')
module.exports.getAllUsers = (req, res, next) => {
    res.json(users)
    
}
module.exports.createUser = (req, res, next)=>{
    fs.readFile('file.json', 'utf8', (err, content) => {
        console.log(content)
        if (err) throw err
    let data = JSON.parse(content)
    const reqData=req.body
    data.push(reqData)

    fs.writeFile('file.json', JSON.stringify(data, null, 2), (err) => {
        if (err) throw err
        else {
            res.send('Updated successfully')
        }
    })
    })   
}
module.exports.bulkUpdate=(req, res, next)=> {
    const data = req.body;
    users.forEach(user => {
        data.forEach(singleData => {
            if (user.id == singleData.id) {
                 if(singleData.name){user.name=singleData.name}
                if(singleData.gender){user.gender=singleData.gender}
                if(singleData.address){user.address=singleData.address}               
                if(singleData.contact){user.contact=singleData.contact}
                if(singleData.photoUrl){user.photoUrl=singleData.photoUrl}
            }
        })
    })
    fs.writeFile('file.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            res.send('internal server error')
        } else {
            res.send('Updated successfully')
        }
        
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
    updatedUser.photoUrl = req.body.photoUrl;
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