const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res)=>{
    res.json({
        posts: {
            title: 'The chambea post',
            description: "If you are auth'd you will know what to respond"
        }
    })
});
module.exports=router;