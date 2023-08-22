/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Task management
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: OK
 * 
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215d1
 *               trader:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215d2
 *               service:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215d3
 *               subtasks:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: ['610f9c8e33dc885c93a215d4', '610f9c8e33dc885c93a215d5']
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2023-07-01
 *               status:
 *                 type: string
 *                 enum: ['pending', 'accepted', 'completed']
 *                 example: pending
 *             required:
 *               - user
 *               - trader
 *               - service
 *               - subtasks
 *               - date
 *               - status
 *     responses:
 *       201:
 *         description: Created
 */

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215d1
 *         required: true
 *         description: ID of the task
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Task not found
 * 
 *   put:
 *     summary: Update a task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215d1
 *         required: true
 *         description: ID of the task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215d1
 *               trader:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215d2
 *               service:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215d3
 *               subtasks:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: ['610f9c8e33dc885c93a215d4', '610f9c8e33dc885c93a215d5']
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2023-07-01
 *               status:
 *                 type: string
 *                 enum: ['pending', 'accepted', 'completed']
 *                 example: pending
 *             required:
 *               - user
 *               - trader
 *               - service
 *               - subtasks
 *               - date
 *               - status
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       404:
 *         description: Task not found
 * 
 *   delete:
 *     summary: Delete a task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215d1
 *         required: true
 *         description: ID of the task
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 */
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Routes for tasks
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTaskById);
router.delete('/tasks/:id', taskController.deleteTaskById);

module.exports = router;



