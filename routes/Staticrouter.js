const express = require('express');
const { restrictTo } = require('../middlewares/auth');

const router = express.Router();

router.get('/admin/exclusive', restrictTo(['ADMIN']), (req,res) =>{
   return res.render('homepage.ejs',
      {message: "You are an admin"}
   )
})
router.get('/', restrictTo(['NORMAL', "ADMIN"]),(req,res) =>{
   return res.render('homepage.ejs',
    {message: "You are a normal user"})
})
router.get('/signup', (req, res) =>{
   return res.render("signup.ejs")
})
router.get('/login', (req, res) =>{
    return res.render("login.ejs")
 })
 


module.exports = router;