const User = require('../models/user');

const usersData = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'password123',
    address: '123 Main St, City1',
    postcode: 'ABC123',
    dateOfBirth: '1990-01-01',
    firstName: 'John',
    lastName: 'Doe',
    profilePicture: 'http://example.com/john_doe.jpg',
    mobileNumber: '123-456-7890',
    trader: false,
    location: 'City1, Country1', // Add the location field
  },
  {
    username: 'jane_smith',
    email: 'jane@example.com',
    password: 'password456',
    address: '456 Main St, City2',
    postcode: 'XYZ456',
    dateOfBirth: '1995-05-15',
    firstName: 'Jane',
    lastName: 'Smith',
    profilePicture: 'http://example.com/jane_smith.jpg',
    mobileNumber: '987-654-3210',
    trader: true,
    location: 'City2, Country2', // Add the location field
  },
  // Add more user data as needed
];

const seedUsers = async () => {
  try {
    await User.deleteMany(); // Clear existing users before seeding
    await User.insertMany(usersData);
    console.log('Users seeded successfully.');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

module.exports = seedUsers;

