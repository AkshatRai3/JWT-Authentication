const User = require('../models/user')
const { v4: uuidv4 } = require('uuid');
const {setUser} = require('../service/auth')
async function handleUserSignup(req, res){

    const body = req.body;

    await User.create({
        name: body.name,
        email: body.email,
        password: body.password
    });
    return res.render("homepage.ejs")
}

async function handleUserLogin(req, res){

     const {email, password} = req.body;
     const user = await User.findOne({email,password})
     if(!user){
         return res.render("login.ejs", {error: "Invalid email or password"} )
     }
     const sessionId = uuidv4(); 
     setUser(sessionId, user)
     res.cookie( "uid", sessionId);
     return res.render("homepage.ejs", {user: user.name})
}
 

module.exports = {
    handleUserSignup,
    handleUserLogin
}