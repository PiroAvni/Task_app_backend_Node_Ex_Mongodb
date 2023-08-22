// controllers/paymentController.js
const Payment = require('../models/payment');

// Controller for getting all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for getting a single payment by ID
exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json(payment);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for creating a new payment
exports.createPayment = async (req, res) => {
  try {
    const { user, trader, amount, date, status } = req.body;
    const payment = new Payment({ user, trader, amount, date, status });
    await payment.save();
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
