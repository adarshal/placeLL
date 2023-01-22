const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    dsa: {
        type: Number
    },
    webd: {
        type: Number
    },
    react: {
        type: Number
    },

},
    {
        timestamps: true // to know when post was created when was updated
    }

);

const Score = mongoose.model('Score', ScoreSchema);
module.exports = Score;