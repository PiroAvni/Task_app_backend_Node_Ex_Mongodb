const Booking = require('../models/booking');

const bookingsData = [
  {
    user: 'user_id_1', // Replace with actual User ID
    trader: 'trader_id_1', // Replace with actual Trader ID
    service: 'service_id_1', // Replace with actual Service ID
    subtask: 'subtask_id_1', // Replace with actual Subtask ID
    date: new Date('2023-07-22'),
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    status: 'completed',
  },
  {
    user: 'user_id_2', // Replace with actual User ID
    trader: 'trader_id_2', // Replace with actual Trader ID
    service: 'service_id_2', // Replace with actual Service ID
    subtask: 'subtask_id_2', // Replace with actual Subtask ID
    date: new Date('2023-07-23'),
    startTime: '2:00 PM',
    endTime: '4:00 PM',
    status: 'completed',
  },
  // Add more booking data as needed
];

const seedBookings = async () => {
  try {
    await Booking.deleteMany();
    await Booking.insertMany(bookingsData);
    console.log('Bookings seeded successfully.');
  } catch (error) {
    console.error('Error seeding bookings:', error);
  }
};

module.exports = seedBookings;

