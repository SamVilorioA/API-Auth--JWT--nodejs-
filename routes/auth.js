const router = require('express').Router();
const User = require('../model/User');



router.post('/register', async (req, res) =>{

    //Validating data
    const {error} = schema.validate(req.body);
    if(error)return res.status(400).send(error.details[0].message);

    //send data
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);        
    }
});

module.exports = router;