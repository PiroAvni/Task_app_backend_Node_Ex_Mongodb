const mongoose = require('mongoose');

const traderSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  postcode: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilePicture: { type: String },
  mobileNumber: { type: String },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  subtasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subtask' }],
});

const Trader = mongoose.model('Trader', traderSchema);

module.exports = Trader;

