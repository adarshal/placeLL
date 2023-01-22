const express =require('express');
const router = express.Router();

router.use('/v1', require('./v1'));
//v2 not added add if you want .add index.js file in v2 

module.exports=router;