// models/payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  trader: { type: mongoose.Schema.Types.ObjectId, ref: 'Trader', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
