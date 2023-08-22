const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  trader: { type: mongoose.Schema.Types.ObjectId, ref: 'Trader', required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  subtasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subtask', required: true }],
  date: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
  payments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }],
  testimonials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Testimonial' }],
  chats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }],
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

