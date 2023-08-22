const Testimonial = require('../models/testimonial');

const testimonialsData = [
  {
    user: 'user_id1', // Replace with an existing user ID
    trader: 'trader_id1', // Replace with an existing trader ID
    message: 'John Trader is awesome!',
  },
  {
    user: 'user_id2', // Replace with an existing user ID
    trader: 'trader_id2', // Replace with an existing trader ID
    message: 'Jane Trader provides excellent service!',
  },
  // Add more testimonial data as needed
];

const seedTestimonials = async () => {
  try {
    await Testimonial.deleteMany();
    await Testimonial.insertMany(testimonialsData);
    console.log('Testimonials seeded successfully.');
  } catch (error) {
    console.error('Error seeding testimonials:', error);
  }
};

module.exports = seedTestimonials;
