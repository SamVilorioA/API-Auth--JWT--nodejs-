const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
//import routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

//connect to db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log('Connected to DB'));
//midleware
app.use(express.json());

//Route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(3000, () => console.log("Server's up!"));