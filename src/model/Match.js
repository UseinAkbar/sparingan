const mongoose = require("mongoose");

const Match = new mongoose.Schema({
    id_user:  {
      type: String,
      required: true
    },
    id_sport: {
      type: String,
      required: true
    },
    match_player: {
      type: Number,
      required: true
    },
    match_description: {
      type: String,
      required: true
    },
    match_location: {
      type: String,
      required: true
    },
    match_date: {
      type: Date,
      required: true
    },
    match_cost: String
})

module.exports = mongoose.model('match',Match)