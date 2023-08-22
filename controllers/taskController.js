const Task = require('../models/task');

// Controller for getting all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('user trader service subtasks bookings payments testimonials chats');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for getting a single task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('user trader service subtasks bookings payments testimonials chats');
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for creating a new task
exports.createTask = async (req, res) => {
  try {
    const { user, trader, service, subtasks, date, status, bookings, payments, testimonials, chats } = req.body;
    const task = new Task({ user, trader, service, subtasks, date, status, bookings, payments, testimonials, chats });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for updating a task by ID
exports.updateTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    const { user, trader, service, subtasks, date, status, bookings, payments, testimonials, chats } = req.body;
    task.user = user;
    task.trader = trader;
    task.service = service;
    task.subtasks = subtasks;
    task.date = date;
    task.status = status;
    task.bookings = bookings;
    task.payments = payments;
    task.testimonials = testimonials;
    task.chats = chats;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for deleting a task by ID
exports.deleteTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await task.remove();
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
