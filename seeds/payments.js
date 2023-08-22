const Payment = require('../models/payment');

const paymentsData = [
  {
    user: 'user_id_1', // Replace with actual User ID
    trader: 'trader_id_1', // Replace with actual Trader ID
    amount: 100, // Replace with actual payment amount
    date: new Date('2023-07-22'),
    status: 'completed',
  },
  {
    user: 'user_id_2', // Replace with actual User ID
    trader: 'trader_id_2', // Replace with actual Trader ID
    amount: 150, // Replace with actual payment amount
    date: new Date('2023-07-23'),
    status: 'completed',
  },
  // Add more payment data as needed
];

const seedPayments = async () => {
  try {
    await Payment.deleteMany();
    await Payment.insertMany(paymentsData);
    console.log('Payments seeded successfully.');
  } catch (error) {
    console.error('Error seeding payments:', error);
  }
};

module.exports = seedPayments;

