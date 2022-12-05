"use strict"
/* Serveur pour le site API Tick */
let  express = require('express');
let bodyParser = require('body-parser');
const cors = require('cors');
const dbo = require("./db/conn");

dbo.connectToServer((err=null)=>{
    if(err){
        console.log(err);
    }
});

//let attendance = require('./routers/attendance');
//let techer = require('./routers/teacher');
//let student = require('./routers/student');
//let group = require('./routers/group');
//let institution = require('./routers/institution');
let clubs = require('./routers/clubs');
//let auth = require('./routers/auth');
let app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//get requests:
app.use('/api/clubs', clubs);
//app.use('/api/institution', institution);
//app.use('/api/teacher', techer);
//app.use('/api/student', student);
//app.use('/api/group', group);
//app.use('/api/attendence', attendance);
//app.use('/api/auth', auth);

app.post('/', (req, res) => {
    res.json({email:req.body.email});
})
app.listen(3001, () => console.log('listening on http://localhost:3001'));
