const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//connect to db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log('Connected to DB'));
//import routes
const authRoute = require('./routes/auth');

//Route middleware
app.use('/api/user', authRoute)

app.listen(3000, () => console.log("Server's up!"));