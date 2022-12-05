const express = require("express");
const router = express.Router();
const {auth} = require("../middlewares/auth");
const db = require("../database");

router.get('/:id', auth, (req, res)=>{

});



module.exports = router;