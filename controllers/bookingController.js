// controllers/bookingController.js
const Booking = require('../models/booking');

// Controller for getting all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for getting a single booking
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for creating a new booking
exports.createBooking = async (req, res) => {
  try {
    const { user, trader, service, subtask, date, status } = req.body;
    const booking = new Booking({ user, trader, service, subtask, date, status });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
