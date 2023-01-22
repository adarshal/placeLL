const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
    company: {
        type: String
    },
    date: {
        type: Date
    },
    student: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        }
    ],

},
    {
        timestamps: true // to know when post was created when was updated
    }

);

const Interview = mongoose.model('Interview', InterviewSchema);
module.exports = Interview;