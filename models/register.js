const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerationSchema = new Schema({
  name: {
    type: String,
  },
  email: { type: String },
});

module.exports = mongoose.model('Register', registerationSchema);
