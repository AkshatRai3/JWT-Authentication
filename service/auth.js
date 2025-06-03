const jwt = require('jsonwebtoken');
const secret = "palak-deserves-better-than-me"
function setUser(user){
    jwt.sign({
        _id:user._id,
        email:user.email
    },secret);
}

function getUser(token){
    if(!token){ 
            return null;
        }
    return jwt.verify(token, secret)
}

module.exports = {
    setUser,
    getUser
}