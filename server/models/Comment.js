const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CommentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  context: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  reference: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Comment', CommentSchema);