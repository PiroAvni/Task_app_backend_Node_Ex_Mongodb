const Task = require('../models/task');

const tasksData = [
  {
    user: 'user_id_1', // Replace with actual User ID
    trader: 'trader_id_1', // Replace with actual Trader ID
    service: 'service_id_1', // Replace with actual Service ID
    subtasks: ['subtask_id_1', 'subtask_id_2'], // Replace with actual Subtask IDs
    date: new Date('2023-07-22'),
    status: 'pending',
    bookings: ['booking_id_1'], // Replace with actual Booking IDs
    payments: ['payment_id_1'], // Replace with actual Payment IDs
    testimonials: ['testimonial_id_1'], // Replace with actual Testimonial IDs
    chats: ['chat_id_1'], // Replace with actual Chat IDs
  },
  {
    user: 'user_id_2', // Replace with actual User ID
    trader: 'trader_id_2', // Replace with actual Trader ID
    service: 'service_id_2', // Replace with actual Service ID
    subtasks: ['subtask_id_3'], // Replace with actual Subtask IDs
    date: new Date('2023-07-23'),
    status: 'accepted',
    bookings: ['booking_id_2'], // Replace with actual Booking IDs
    payments: ['payment_id_2'], // Replace with actual Payment IDs
    testimonials: ['testimonial_id_2'], // Replace with actual Testimonial IDs
    chats: ['chat_id_2'], // Replace with actual Chat IDs
  },
  // Add more task data as needed
];

const seedTasks = async () => {
  try {
    await Task.deleteMany();
    await Task.insertMany(tasksData);
    console.log('Tasks seeded successfully.');
  } catch (error) {
    console.error('Error seeding tasks:', error);
  }
};

module.exports = seedTasks;

