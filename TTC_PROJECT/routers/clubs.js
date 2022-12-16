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

router.get('/:id', (req, res)=>{
    const dbConnect = dbo.getDb();
    dbConnect
    .collection("clubs")
    .findOne({id:req.params.id}, function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
      }
    });
});

// get clubs with parameters

//=acos(sin(lat1)*sin(lat2)+cos(lat1)*cos(lat2)*cos(lon2-lon1))*6371    
router.get('/search/:param', (req, res)=>{
    const dbConnect = dbo.getDb();
    dbConnect
    .collection("clubs")
    .find( { position: {$lte: [acos(sin(req.params.position.lat)*sin(position.lat)+cos(req.params.position.lat)*cos(position.lat)*cos(position.lon-req.params.position.lon))*6371,10] } } )
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
      }
    });
});
module.exports = router;