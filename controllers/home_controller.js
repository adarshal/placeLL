
const Student = require('../models/student');
const Interview = require('../models/interview');
const csv = require('csv-express');
const fastcsv=require('fast-csv');
const fs=require('fs');
const ws=fs.createWriteStream('output_fastcsv.csv')
const Json2csvParser = require("json2csv").Parser;
module.exports.home = async function (req, res) {

    
        try{
            return res.render('home', {
                title: "PlaceeLL | Home",
               
            });
    
        }catch(err){
            console.log('Error in home ctrler', err);
            return;
        }
       
    }


    module.exports.download = async function (req, res) {
        var filename   = "students.csv";

        Student.find({})
        .populate({
            path:'interview'
        })
        .lean().exec({}, function(err, students) {
            if (err) res.send(err);
            console.log(students.interview)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader("Content-Disposition", 'attachment; filename='+filename);
            res.csv(students, true);
        });

        // const students=await Student.find({})
        // .populate({
        //     path:'interview'
        // });
        // fastcsv.
        // write(students, {headers:true})
        // .on('finish',function(){
        //     console.log('adde csv');
        // })
        // .pipe(ws)

        // await Student.find({}).lean().exec((err, data) => {
        //     if (err) throw err;
        //     const csvFields = ['_id', 'name', 'batch']
        //     console.log(csvFields);
        //     const json2csvParser = new Json2csvParser({
        //         csvFields
        //     });
        //     const csvData = json2csvParser.parse(data);
        //     fs.writeFile("bezkoder_mongodb_fs.csv", csvData, function(error) {
        //         if (error) throw error;
        //         console.log("Write to bezkoder_mongodb_fs.csv successfully!");
        //     });
        //     res.csv('File downloaded Successfully')
        // });
    };
