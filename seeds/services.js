const mongoose = require('mongoose');
const Service = require('./models/service');
const Subtask = require('./models/subtask');



// Seed data for services
const servicesData = [
  {
    name: 'Handyman Service',
    subtasks: [
      { name: 'Home Repairs' },
      { name: 'Furniture Assembly' },
      { name: 'TV Mounting' },
      { name: 'Ceiling Fan Installation' },
      { name: 'Smart Home Installation' },
      { name: 'Heavy Lifting' },
      { name: 'Install Air Conditioner' },
      { name: 'Painting' },
      { name: 'Plumbing' },
      { name: 'Shelf Mounting' },
      { name: 'Home Maintenance' },
      { name: 'Hanging Curtains & Installing Blinds' },
      { name: 'Drywall Repair Service' },
      { name: 'Baby Proofing' },
      { name: 'Gardening Services' },
      { name: 'Light Installation' },
      { name: 'Electrical Help' },
      { name: 'Carpentry Services' },
      { name: 'Hang Pictures' },
      { name: 'Wall Mounting' },
      { name: 'Cabinet Installation' },
      { name: 'Wallpapering Service' },
      { name: 'Fence Installation & Repair Services' },
      { name: 'Deck Restoration Services' },
      { name: 'Doorbell Installation' },
      { name: 'Home Theater Installing' },
      { name: 'Roof & Gutter Cleaning' },
    ],
  },
  {
    name: 'Moving Services',
    subtasks: [
      { name: 'Help Moving' },
      { name: 'Packing Services & Help' },
      { name: 'Unpacking Services' },
      { name: 'Heavy Lifting' },
      { name: 'Local Movers' },
      { name: 'Junk Pickup' },
      { name: 'Furniture Movers' },
      { name: 'One Item Movers' },
      { name: 'Storage Unit Moving' },
      { name: 'Couch Removal' },
      { name: 'Mattress Pick-Up & Removal' },
      { name: 'Furniture Removal' },
      { name: 'Pool Table Movers' },
      { name: 'Appliance Removal' },
      { name: 'Heavy Furniture Moving' },
      { name: 'Rearrange Furniture' },
      { name: 'Full Service Help Moving' },
      { name: 'In-Home Furniture Movers' },
    ],
  },
  {
    name: 'Furniture Assembly Service',
    subtasks: [
      { name: 'Furniture Assembly' },
      { name: 'Patio Furniture Assembly' },
      { name: 'Desk Assembly' },
      { name: 'Dresser Assembly' },
      { name: 'Bed Assembly' },
      { name: 'Bookshelf Assembly' },
      { name: 'Couch Assembly' },
      { name: 'Chair Assembly' },
      { name: 'Wardrobe Assembly' },
      { name: 'Table Assembly' },
      { name: 'Disassemble furniture' },
      { name: 'IKEA MALM Assembly' },
      { name: 'IKEA Kallax Assembly' },
    ],
  },
  {
    name: 'Gardening Services',
    subtasks: [
      { name: 'Weed Removal' },
      { name: 'Lawn Care Services' },
      { name: 'Lawn Mowing Services' },
      { name: 'Landscaping Services' },
      { name: 'Gutter Cleaning' },
      { name: 'Tree Trimming Service' },
      { name: 'Vacation Plant Watering' },
      { name: 'Patio Cleaning' },
      { name: 'Hot Tub Cleaning' },
      { name: 'Fence Installation & Repair Services' },
      { name: 'Deck Restoration Services' },
      { name: 'Patio Furniture Assembly' },
      { name: 'Fence Staining' },
      { name: 'Mulching Services' },
      { name: 'Lawn Fertilizer Service' },
      { name: 'Hedge Trimming Service' },
      { name: 'Outdoor Party Setup' },
      { name: 'Urban Gardening Service' },
      { name: 'Leaf Raking & Removal' },
      { name: 'Produce Gardening' },
      { name: 'Hose Installation' },
      { name: 'Shed Maintenance' },
      { name: 'Pressure Washing' },
    ],
  },
  {
    name: 'Contactless Tasks',
    subtasks: [
      { name: 'Contactless Delivery' },
      { name: 'Contactless Prescription Pick-up & Delivery' },
      {name:'Running Your Errands'},
      {name:' Grocery Shopping & Delivery'},
      {name:'Disinfecting Services'},
    ],
  },
  {
    name: 'Cleaning Services',
    subtasks: [
      { name: 'Cleaning on Demand' },
      { name: 'Disinfecting Services' },
      {name:'End of Tenancy Cleaning'},
      {name:' Deep Cleaning'},
      {name:'House Cleaning Services'},
      {name:'One Time Cleaning Services'},
      {name:'Office Cleaning'},
      {name:'Car Washing'},
      {name:'Airbnb Cleaning'},
      {name:'Laundry Help'},
    ],
  },
  // Add more services here...
];

// Function to seed services and subtasks
const seedService= async () => {
  try {
    // Clear existing data
    await Service.deleteMany();
    await Subtask.deleteMany();

    // Seed services and subtasks
    for (const serviceData of servicesData) {
      const { subtasks, ...serviceInfo } = serviceData;
      const service = await Service.create(serviceInfo);

      for (const subtaskData of subtasks) {
        subtaskData.service = service._id;
        await Subtask.create(subtaskData);
      }
    }

    console.log('Data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Close the database connection
    mongoose.disconnect();
  }
};


module.exports = seedService
