const express =require('express');
const router = express.Router();

const addController=require('../controllers/add_controller');
// router.get('/student/:id',addController.addStudent);
router.get('/students/:id',addController.addInterviewPage);
router.post('/students/interviewaddstudent',addController.interviewaddstudent);





module.exports= router;