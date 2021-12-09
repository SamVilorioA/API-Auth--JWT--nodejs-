const express = require('express');
const app = express();

//import routes
const authRoute = require('./routes/auth');

//Route middleware
app.use('/api/user', authRoute)

app.listen(3000, () => console.log("Server's up!"));