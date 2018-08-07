var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: {
    type: String,
    required: 'Every project needs a name'
  },
  description: {
    type: String,
    required: 'Needs a description'
  },
  image: {
    data: Buffer,
    contentType: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  area: {
    type: [{
      type: String,
      enum: ['Web', 'App', 'Algorithms', 'Machine Learning']
    }],
    default: ['App']
  }
});
module.exports = mongoose.model('Projects', ProjectSchema);
