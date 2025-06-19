const {getUser} = require('../service/auth')

async function restrictToLoggedInUserOnly(req, res, next){

     const userUid = req.headers["authorization"]; //https://expressjs.com/en/api.html#res.cookie 

   //   console.log(req.headers); 
     if(!userUid){
        return res.redirect('/login');  
     }
     const token = userUid.split(" ")[1];
     const user = getUser(token)
     if(!user){
        return res.redirect('/login')
     }

     req.user = user;
     next();
    }

async function checkAuth(req, res, next){
   console.log(req.headers); 
   const userUid = req.headers["authorization"];
   const token = userUid.split("Bearer ")[1]
   const user = getUser(token)
   req.user = user;

   next()
}

module.exports = {
    restrictToLoggedInUserOnly,
    checkAuth
}