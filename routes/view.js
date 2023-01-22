const express =require('express');
const router = express.Router();

const showAllController=require('../controllers/show_all_controller');
router.get('/student',showAllController.allStud);
router.get('/interview',showAllController.allInterview);
router.use('/add', require('./add'));




module.exports= router;