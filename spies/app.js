var db=require("./db.js");
//check if email already exists
module.exports.handleSignup=(email,password)=>{
    db.saveUser({
        email:email,
        password:password,
    });
//send the welcome email
};