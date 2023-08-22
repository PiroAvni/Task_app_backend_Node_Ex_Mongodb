const asyncHandler = require('express-async-handler');
const UserTaskList = require('../models/userTaskList');
const Task = require('../models/task');

// @desc    Get user task list
// @route   GET /api/user-task-list
// @access  Private
const getUserTaskList = asyncHandler(async (req, res) => {
  const userTaskList = await UserTaskList.findOne({ user: req.user._id }).populate('tasks');

  if (userTaskList) {
    res.json(userTaskList);
  } else {
    res.status(404);
    throw new Error('User task list not found');
  }
});

// @desc    Create a new task and add it to user task list
// @route   POST /api/user-task-list
// @access  Private
const createTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  const task = new Task({
    title,
    description,
  });

  const createdTask = await task.save();

  const userTaskList = await UserTaskList.findOne({ user: req.user._id });

  if (userTaskList) {
    userTaskList.tasks.push(createdTask._id);
    await userTaskList.save();
    res.status(201).json(createdTask);
  } else {
    res.status(404);
    throw new Error('User task list not found');
  }
});

// @desc    Update a task
// @route   PUT /api/user-task-list/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
  const { title, description, completed } = req.body;

  const task = await Task.findById(req.params.id);

  if (task) {
    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed || task.completed;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } else {
    res.status(404);
    throw new Error('Task not found');
  }
});

// @desc    Delete a task
// @route   DELETE /api/user-task-list/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    await task.remove();

    const userTaskList = await UserTaskList.findOne({ user: req.user._id });

    if (userTaskList) {
      userTaskList.tasks = userTaskList.tasks.filter((taskId) => taskId.toString() !== req.params.id);
      await userTaskList.save();
    }

    res.json({ message: 'Task removed successfully' });
  } else {
    res.status(404);
    throw new Error('Task not found');
  }
});

module.exports = { getUserTaskList, createTask, updateTask, deleteTask };
