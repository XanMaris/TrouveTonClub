const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../database");

//login
router.post('/login',(req, res)=>{
    let email = req.body.email;
    let password = req.body.password;
    console.log(email+password);
    try{
        let user = db.selectTeacher.get(email);
        if(!user) return res.status(400).send("Invalid email or password");
        if(user.password !== password) return res.status(400).send("Invalid email or password");
        const token = getToken(user);
        return res.status(200).send(token);
    }catch(e){
        res.status(400).send(e.message);
    }
});

module.exports = router;

let getToken = (user) => {
    delete user.passeord;
    user.role = 'teacher';
    console.log(user);
    return jwt.sign(user, "a58b5d47f2e5961c025d2e874aa2b54d");
}
