const jwt = require("jsonwebtoken");

let auth = (req, res, next)=>{
    let token = req.header("x-auth-token");
    if (!token) return res.status(401).send("Access denied. No token provided.");
    try {
        const decoded = jwt.verify(token, "a58b5d47f2e5961c025d2e874aa2b54d");
        req.user = decoded;
    next();
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
}

let isTecher = (req, res, next)=>{
    let user = req.user;
    if(user.role === "teacher") next();
    else return res.status(401).send("Access denied.");
}

let isAdmin = (req, res, next)=>{
    let user = req.user;
    if(user.role === "admin") next();
    else return res.status(401).send("Access denied.");
}

module.exports = {isAdmin, isTecher, auth};