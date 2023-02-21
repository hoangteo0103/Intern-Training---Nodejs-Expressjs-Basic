const express = require('express');
const path = require('path') ; 
const fs = require('fs'); 

const filePath = path.join(__dirname,"..","data","users.json");

const router = express.Router();

router.get('/users' , (req , res) => {
    fs.readFile(filePath , (err , data) => {
        if(err) {
            res.status(500).send("ERROR");
        }
        const users = JSON.parse(data) ; 
        res.json(users);
    });
}); 

router.post('/users' , (req , res) => {
    const user = req.body ;
    fs.readFile(filePath , (err , data) => {
        if(err) {
            res.status(500).send("ERROR") ; 
        }
        const users = JSON.parse(data) ; 
        users.push(user) ;
        fs.writeFileSync(filePath, JSON.stringify(users)) ; 
        res.json(users);
        }
    )
});

router.delete('/users/:id' , (req , res) => {
    const id = req.params.id ; 
    fs.readFile(filePath , (err, data) => {
        if(err) 
        {
            res.status(500).send("ERROR") ; 
        }
        const users = JSON.parse(data);
        if(users.length <= id) res.status(500).send("ERROR") ;
        users.splice(id , 1) ; 
        fs.writeFileSync(filePath , JSON.stringify(users));
        res.json(users);
    })
});

router.put('/users/:id' , (req , res) => {
    const id = req.params.id ; 
    fs.readFile(filePath , (err, data) => {
        if(err) 
        {
            res.status(500).send("ERROR") ; 
        }
        const users = JSON.parse(data);
        if(users.length <= id) res.status(500).send("ERROR") ;
        users[id] = {...req.body};
        fs.writeFileSync(filePath , JSON.stringify(users));
        res.json(users);
    })
});

router.patch('/users/:id' , (req, res ) => {
    const id = req.params.id ; 
    fs.readFile(filePath , (err, data) => {
        if(err) 
        {
            res.status(500).send("ERROR") ; 
        }
        const users = JSON.parse(data);
        if(users.length <= id) res.status(500).send("ERROR") ;
        users[id].username = req.body.username;
        fs.writeFileSync(filePath , JSON.stringify(users));
        res.json(users);
    })
});

module.exports = router;
