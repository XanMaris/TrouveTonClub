const express = require("express");
const {isAdmin, auth} = require("../middlewares/auth");
const router = express.Router();
const dbo = require("../db/conn");

router.get('/', (req, res)=>{
    const dbConnect = dbo.getDb();
    dbConnect
    .collection("test")
    .find({}).limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
      }
    });
});

module.exports = router;