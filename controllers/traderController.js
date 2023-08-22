const Trader = require('../models/trader');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

// Controller for getting all traders
exports.getAllTraders = async (req, res) => {
  try {
    const traders = await Trader.find();
    res.json(traders);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for getting a single trader by ID
exports.getTraderById = async (req, res) => {
  try {
    const trader = await Trader.findById(req.params.id);
    if (!trader) {
      return res.status(404).json({ error: 'Trader not found' });
    }
    res.json(trader);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for creating a new trader
exports.createTrader = async (req, res) => {
  try {
    const { firstName,lastName, dateOfBirth, company, email, password, location, services } = req.body;
    const trader = new Trader({firstName,lastName, dateOfBirth, company, email, password, location, services });
    await trader.save();
    res.status(201).json(trader);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for trader login
exports.loginTrader = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Check if the trader exists
    const trader = await Trader.findOne({ email });
    if (!trader) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, trader.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create and send the JWT token for authentication
    const token = jwt.sign({ traderId: trader._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for trader logout (optional, as token-based authentication does not require explicit logout)
exports.logoutTrader = async (req, res) => {
  try {
    // No action is needed for token-based authentication
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for updating trader password
exports.updateTraderPassword = async (req, res) => {
  try {
    const { traderId } = req.params;
    const { currentPassword, newPassword } = req.body;

    // Check if the trader exists
    const trader = await Trader.findById(traderId);
    if (!trader) {
      return res.status(404).json({ error: 'Trader not found' });
    }

    // Compare the provided current password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(currentPassword, trader.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: 'Invalid current password' });
    }

    // Hash the new password and update it in the database
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    trader.password = hashedNewPassword;
    await trader.save();

    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
