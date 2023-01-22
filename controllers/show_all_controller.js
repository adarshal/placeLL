const Student = require('../models/student');
const Interview = require('../models/interview');

module.exports.allStud = async function (req, res) {

        // populate all students
   
        try{
        
            let students = await Student.find({});
    
            return res.render('all_students', {
                title: "PlaceLL | Home",
                students:  students,
            });
    
        }catch(err){
            console.log('Error in displaying all students', err);
            return;
        }
       
    }

    module.exports.allInterview = async function (req, res) {

        // populate all company interview
   
        try{
        
            let interviews = await Interview.find({});
    
            return res.render('all_interview', {
                title: "PlaceLL | data",
                interviews:  interviews,
            });
    
        }catch(err){
            console.log('Error in displaying all students', err);
            return;
        }
       
    }