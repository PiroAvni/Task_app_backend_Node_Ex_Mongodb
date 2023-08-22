const Subtask = require('../models/subtask');

const subtasksData = [
  {
    name: 'Subtask 1',
    description: 'Description for Subtask 1',
    pricePerHour: 25.0,
    service: 'service_id_1', // Replace with actual Service ID
  },
  {
    name: 'Subtask 2',
    description: 'Description for Subtask 2',
    pricePerHour: 30.0,
    service: 'service_id_1', // Replace with actual Service ID
  },
  {
    name: 'Subtask 3',
    description: 'Description for Subtask 3',
    pricePerHour: 20.0,
    service: 'service_id_2', // Replace with actual Service ID
  },
  // Add more subtask data as needed
];

const seedSubtasks = async () => {
  try {
    await Subtask.deleteMany();
    await Subtask.insertMany(subtasksData);
    console.log('Subtasks seeded successfully.');
  } catch (error) {
    console.error('Error seeding subtasks:', error);
  }
};

module.exports = seedSubtasks;
