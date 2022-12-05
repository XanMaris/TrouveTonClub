const express = require("express");
const {isAdmin, auth} = require("../middlewares/auth");
const db = require("../database");
const Joi = require("joi").extend(require('@joi/date'));;
const router = express.Router();

const schema = Joi.object({
    name : Joi.string().required().label('Group name')});

router.post('/', [auth, isAdmin], (req, res) => {
    let {error} = schema.validate(req.body);

    if (error) return res.status(400).send(error.message);

    try{
        let group = db.selectGroup.get(req.body.name);
        if(group != undefined)
            return res.status(400).send("Group name already used");
        group = {...req.body};
        db.insertGroup.run(group);
            return res.status(200).send("'"+group.name+"' is successfully added");
    }catch(e){
        console.log(e.message);
        return res.status(400).send("Error while adding group");
    }
});

router.get('/all', auth, (req, res)=>{
    try{
        let groups = db.selectAllGroup.all();
        return res.json(groups);
    }catch(e){
        console.log(e.message);
        return res.status(400).send("Error");
    }
});

module.exports = router;