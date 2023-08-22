const mongoose = require('mongoose');

const subtaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  pricePerHour: { type: Number, required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
});

const Subtask = mongoose.model('Subtask', subtaskSchema);

module.exports = Subtask;
