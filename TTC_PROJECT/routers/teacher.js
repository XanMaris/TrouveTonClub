const express = require("express");
const {isAdmin, auth} = require("../middlewares/auth");
const db = require("../database");
const Joi = require("joi").extend(require('@joi/date'));;
const router = express.Router();

const schema = Joi.object({
    firstName : Joi.string().required().label('First name'),
    lastName : Joi.string().required().label('Last name'),
    birthdate : Joi.date().format('YYYY-MM-DD').required().label("Email"),
    email : Joi.string().email().required().label("Email"),
    image : Joi.string().uri().label("Logo URL")});


router.post('/add',[auth, isAdmin], (req, res)=>{
    let {error} = schema.validate(req.body);
    if (error) return res.status(400).send(error.message);
    try{
        let teacher = db.selectTeacher.get(req.body.email);
        if(teacher != undefined)
            res.status(400).send("Adress email already registered");
        teacher = {...req.body};

        //generate initial password:
        teacher.password = "0000"; 
        teacher.workspaceId = req.user.id;
        if(!teacher.image) teacher.image = null;
        db.insertTeacher.run(teacher);
        teacher = db.selectTeacher.get(req.body.email);

        //send Email to teacher:
        console.log("Registering email\nPlease change your password from this LINK\n",teacher);
        return res.status(200).send("A new teacher added successfully");
        
    }catch(e){
        console.log(e.message);
        res.status(400).send("Error while registering");
    }
});

router.get('/all', [auth, isAdmin], (req, res)=>{
    try{
        let groups = db.selectAllTeacher.all(req.user.id);
        return res.json(groups);
    }catch(e){
        console.log(e.message);
        return res.status(400).send("Error");
    }
});

module.exports = router;