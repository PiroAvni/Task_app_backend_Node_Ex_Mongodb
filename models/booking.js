// models/booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  trader: { type: mongoose.Schema.Types.ObjectId, ref: 'Trader', required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  subtask: { type: mongoose.Schema.Types.ObjectId, ref: 'Subtask', required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' },
  // Additional fields as per your requirement
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

