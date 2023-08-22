const mongoose = require('mongoose');

const userTaskListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
});

const UserTaskList = mongoose.model('UserTaskList', userTaskListSchema);

module.exports = UserTaskList;
