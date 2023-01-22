const Student = require('../models/student');
const Interview = require('../models/interview');
const path = require('path');
const fs = require('fs'); // file sys , used for del files(avatar) via multer
module.exports.addInterviewPage = async function (req, res) {
    try{
        
        let interview = await Interview.findById(req.params.id);
        // let students= await Student.findById({'_id':{$in:interview.student}});
        const ids=interview.student;
        const records = await Student.find({ '_id': { $in: ids } });
        // console.log(interview.company);
        // let students=await Student.find({ '_id':{ "$not": { "$all": ids } } })
        let students=await Student.find({ '_id':{ $nin: ids  } })
        console.log(students.length)
        return res.render('interview_add_students', {
            title: "PlaceLL | data",
            interview:  interview,
            students: students,
            enrolled:records
        });

    }catch(err){
        console.log('Error in creating  form page add students', err);
        return;
    }
    
}

module.exports.interviewaddstudent = async function (req, res) {
    try{
        
        
        let student=await Student.findById(req.body.student)
        let interview=await Interview.findById(req.body.interview)
        //console.log(student);
        //console.log(interview);
        interview.student.push(student);
        interview.save();
        student.interview.push(interview);
        student.save();
        res.redirect('back');

    }catch(err){
        console.log('Error in creating  form page interv add students', err);
        return;
    }
    
}


