// controllers/testimonialController.js
const Testimonial = require('../models/testimonial');

// Controller for getting all testimonials
exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for getting a single testimonial by ID
exports.getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for creating a new testimonial
exports.createTestimonial = async (req, res) => {
  try {
    const { trader, user, comment, rating } = req.body;
    const testimonial = new Testimonial({ trader, user, comment, rating });
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
