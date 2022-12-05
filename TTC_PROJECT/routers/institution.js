const express = require("express");
const jwt = require("jsonwebtoken");
const { route } = require("./attendance");
const config = require("config");
const Joi = require("joi");
const {isAdmin, auth} = require("../middlewares/auth");
const db = require("../database");
const bcrypt = require('bcryptjs');
const router = express.Router();

//schema de validation
const schema = Joi.object({
    name : Joi.string().required().label('Institution name'),
    logo : Joi.string().uri().label("Logo URL"),
    adminEmail : Joi.string().email().required().label("Email"),
    password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required().error(new Error('Pssword not valid'))});

//POST: login
router.post('/login', (req, res) => {
    institution = db.selectWorkspace.get(req.body.email);
    if(!institution) return res.status(400).send('Invalid email or password');
    if(bcrypt.compare(req.body.password, institution.password)){
        const token = getToken(institution); 
        return res.send(token);
    }else{
        return res.status(400).send('Invalid email or password');
    }
});

//POST: register
router.post('/register', (req, res) => {
    let {error} = schema.validate(req.body);
    if (error) return res.status(400).send(error.message);
    try{
        let user = db.selectWorkspace.get(req.body.adminEmail);
        if(user) return res.status(400).send('Invalid email.');
        user = {...req.body};

        let salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(user.password, salt);
        user.password = 
        db.insertWorkspace.run(user);
        let institution = db.selectWorkspace.get(req.body.adminEmail);
        const token = getToken(institution);
        return res.send(token);
    }catch(e){
        console.error(e.message);
        res.status(400).send("Error while registering");
    }
});

router.post('/add-teacher',[auth, isAdmin], (req, res) => {

});

let getToken = (institution)=>{
  return jwt.sign(
    {
      id: institution.id,
      name: institution.name,
      logo: institution.logo,
      adminEmail: institution.adminEmail,
      role: 'admin'
    },
    "a58b5d47f2e5961c025d2e874aa2b54d"
  );
}


module.exports = router;