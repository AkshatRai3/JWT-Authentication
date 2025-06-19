const User = require('../models/user')
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
     const token = setUser(user);
    //  res.cookie( "uid", token);
     return res.json({token})
}
 

module.exports = {
    handleUserSignup,
    handleUserLogin
}