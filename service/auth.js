const jwt = require('jsonwebtoken');
const secret = "palak-deserves-better-than-me"
function setUser(user){
    const payload = { 
        _id: user._id,
        email: user.email 
    }
    jwt.sign(payload,secret);
}

function getUser(token){
    if(!token) return null;
    return jwt.verify(token, secret)
}

module.exports = {
    setUser,
    getUser
}