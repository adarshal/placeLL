const Student = require('../models/student');
const Interview = require('../models/interview');
const path = require('path');
const fs = require('fs'); // file sys , used for del files(avatar) via multer


module.exports.student = function (req, res) {
Student.create(
    {
        name: req.body.name,
        batch: req.body.batch,
        college: req.body.college,
        placed: req.body.placed==='1'? true:false,
        dsa:req.body.dsa,
        webd:req.body.webd,
        react:req.body.react,

    }, function (err, newStudent) {
        if (err) { console.log('Error in adding form data ', err); return; }
        console.log(req.body.placed,req.body.placed==='1');
        req.flash('success', 'form data added successfully');
        return res.redirect('back');
    })


}
module.exports.interview = function (req, res) {
Interview.create(
    {
        company: req.body.company,
        date: req.body.date
    }, function (err, newInterview) {
        if (err) { console.log('Error in adding form data in interview ', err); return; }
        // console.log(req.body);
        req.flash('success', 'form data added successfully');
        return res.redirect('back');
    })


}