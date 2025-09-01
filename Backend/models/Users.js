// const mongoose = require('mongoose');

// const { Schema } = mongoose;

// const usersSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   dob: {
//     type: Date,
//     required: true,   // enforce DOB during signup
//   },
// });

// module.exports = mongoose.model('users', usersSchema);






const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('users', usersSchema);
