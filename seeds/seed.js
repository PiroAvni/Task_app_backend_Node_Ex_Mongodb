// seeds/seed.js
const mongoose = require('mongoose');
const seedUsers = require('./users');
const seedTraders = require('./traders');
const seedBookings = require('./bookings');
const seedTestimonials = require('./testimonials');
const seedTasks = require('./tasks');
const seedSubtasks = require('./subtasks');
const seedServices = require('./services');
const seedPayments = require('./payments');

// Replace 'mongodb://localhost/mydatabase' with your actual MongoDB connection string
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    seedData();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const seedData = async () => {
  await seedUsers();
  await seedTraders();
  await seedBookings();
  await seedTestimonials();
  await seedTasks();
  await seedSubtasks();
  await seedServices();
  await seedPayments();

  mongoose.connection.close();
};
