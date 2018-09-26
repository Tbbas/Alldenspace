var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: {
    type: String,
    required: 'Every project needs a name'
  },
  brief: {
    type: String,
    required: 'Needs a Brief decription'
  },
  description: {
    type: String,
    required: 'Needs a description'
  },
  image: {
    type: String,
    required: 'Needs an image!'
  },
  link: {
    type: String,
  },
  status: {
    type: String,
  },
  date: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  area: {
    type: [{
      type: String,
    }],
    default: ['Development']
  }
});
module.exports = mongoose.model('Projects', ProjectSchema);
