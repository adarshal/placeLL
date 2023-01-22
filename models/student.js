const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    college: {
        type: String,
    },
    placed: {
        type: Boolean,
        // required: true
    },
    dsa: {
        type: Number
    },
    webd: {
        type: Number
    },
    react: {
        type: Number
    },
    interview: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Interview'
        }
    ],
},
    {
        timestamps: true // to know when post was created when was updated
    }

);

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;