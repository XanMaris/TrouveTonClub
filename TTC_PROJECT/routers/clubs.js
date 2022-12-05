const express = require("express");
const router = express.Router();
const dbo = require("../db/conn");

router.get('/', (req, res)=>{
    const dbConnect = dbo.getDb();
    dbConnect
    .collection("clubs")
    .find({}).limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
      }
    });
});

router.post('/', (req, res)=>{
    club = {...req.body};
    console.log(club);
    const dbConnect = dbo.getDb();
    dbConnect
    .collection("clubs")
    .insertOne(club, function (err, result) {
        if (err) {
          res.status(400).send("Error inserting matches!");
        } else {
          console.log(`Added a new club : \n ${result}`);
          res.status(204).send();
        }
      });
});

module.exports = router;