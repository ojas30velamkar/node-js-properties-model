const mongoose = require('mongoose');

var PropertySchema = new mongoose.Schema({
  listingId: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  description: {
    type: String
  },
  published_date: {
    type: Number
  },
  price: {
    type: Number,
    required: true
  }
});

var Property = mongoose.model('Property', PropertySchema);

module.exports = {Property};
