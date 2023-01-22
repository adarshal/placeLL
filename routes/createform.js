const express =require('express');
const router = express.Router();

const formController=require('../controllers/form_controller');
router.post('/student',formController.student);
router.post('/interview',formController.interview);





module.exports= router;