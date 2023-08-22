const Service = require('../models/service');

// Controller for getting all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find().populate('subtask');
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for getting a single service by ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate('subtask');
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for creating a new service
exports.createService = async (req, res) => {
  try {
    const { name, description, subtask, pricePerHour } = req.body;
    const service = new Service({ name, description, subtask, pricePerHour });
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for updating a service by ID
exports.updateServiceById = async (req, res) => {
  try {
    const { name, description, subtask, pricePerHour } = req.body;
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { name, description, subtask, pricePerHour },
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json(updatedService);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for deleting a service by ID
exports.deleteServiceById = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.json({ message: 'Service deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
