const express =require('express');
const router = express.Router()
console.log('Router loaded');
// const User = require('../models/users');


const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);
//show student datta filling form
router.get('/create/student',(req, res) => {
    res.render('./create_student',{
        title: "PlaceeLL | Form",
    });
});
router.get('/create/interview',(req, res) => {
    res.render('./create_interview',{
        title: "PlaceeLL | Form",
    });
});

router.use('/create/createform', require('./createform'));

//for viewing list of all students and interview
router.use('/view', require('./view'));

router.use('/download', homeController.download);



router.use('/users', require('./users'));
router.use('/api', require('./api'));

module.exports= router;