const express = require('express');
const path = require('path');
const connectMongoDB = require('./connection/connect');
const userRoute = require('./routes/user');
const app = express();
const PORT = 3000;
const StaticRoute = require('./routes/Staticrouter')
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));
connectMongoDB("mongodb://127.0.0.1:27017/JWTAuth");

app.use('/user', userRoute )
app.use('/', StaticRoute)

app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
})