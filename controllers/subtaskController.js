const Subtask = require('../models/subtask');
const Service = require('../models/service');

// Controller for getting all subtasks
exports.getAllSubtasks = async (req, res) => {
  try {
    const subtasks = await Subtask.find().populate('service');
    res.json(subtasks);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for getting a single subtask by ID
exports.getSubtaskById = async (req, res) => {
  try {
    const subtask = await Subtask.findById(req.params.id).populate('service');
    if (!subtask) {
      return res.status(404).json({ error: 'Subtask not found' });
    }
    res.json(subtask);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for creating a new subtask with association to a service
exports.createSubtask = async (req, res) => {
  try {
    const { name, description, serviceId, pricePerHour } = req.body;
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

    const subtask = new Subtask({
      name,
      description,
      service: service._id,
      pricePerHour,
    });
    await subtask.save();

    // Add the subtask to the service's subtask array
    service.subtask.push(subtask._id);
    await service.save();

    res.status(201).json(subtask);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for updating a subtask by ID
exports.updateSubtaskById = async (req, res) => {
  try {
    const { name, description, pricePerHour } = req.body;
    const updatedSubtask = await Subtask.findByIdAndUpdate(
      req.params.id,
      { name, description, pricePerHour },
      { new: true }
    );
    if (!updatedSubtask) {
      return res.status(404).json({ error: 'Subtask not found' });
    }
    res.json(updatedSubtask);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for deleting a subtask by ID
exports.deleteSubtaskById = async (req, res) => {
  try {
    const deletedSubtask = await Subtask.findByIdAndDelete(req.params.id);
    if (!deletedSubtask) {
      return res.status(404).json({ error: 'Subtask not found' });
    }

    // Remove the subtask from the associated service's subtask array
    const service = await Service.findById(deletedSubtask.service);
    if (service) {
      service.subtask.pull(deletedSubtask._id);
      await service.save();
    }

    res.json({ message: 'Subtask deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

