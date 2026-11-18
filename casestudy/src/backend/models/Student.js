const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  regNo:   { type: String, required: true, unique: true, trim: true },
  name:    { type: String, required: true, trim: true },
  branch:  { type: String, required: true },
  section: { type: String, required: true },
  cgpa:    { type: Number, min: 0, max: 10 },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
