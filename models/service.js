const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  subtask: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subtask' }],
  pricePerHour: { type: Number, required: true },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;

