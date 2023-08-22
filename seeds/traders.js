const Trader = require('../models/trader');

const tradersData = [
  {
    username: 'john_trader',
    email: 'john@example.com',
    password: 'password123',
    address: '123 Main St, City1',
    postcode: 'ABC123',
    dateOfBirth: '1990-01-01',
    firstName: 'John',
    lastName: 'Trader',
    profilePicture: 'profile1.jpg',
    mobileNumber: '1234567890',
    services: ['service_id_1', 'service_id_2'], // Replace with actual Service IDs
    subtasks: ['subtask_id_1', 'subtask_id_2'], // Replace with actual Subtask IDs
  },
  {
    username: 'jane_trader',
    email: 'jane@example.com',
    password: 'password456',
    address: '456 Main St, City2',
    postcode: 'XYZ456',
    dateOfBirth: '1995-05-10',
    firstName: 'Jane',
    lastName: 'Trader',
    profilePicture: 'profile2.jpg',
    mobileNumber: '9876543210',
    services: ['service_id_3', 'service_id_4'], // Replace with actual Service IDs
    subtasks: ['subtask_id_3', 'subtask_id_4'], // Replace with actual Subtask IDs
  },
  // Add more trader data as needed
];

const seedTraders = async () => {
  try {
    await Trader.deleteMany();
    await Trader.insertMany(tradersData);
    console.log('Traders seeded successfully.');
  } catch (error) {
    console.error('Error seeding traders:', error);
  }
};

module.exports = seedTraders;

