/**
 * @swagger
 * tags:
 *   name: UserTaskList
 *   description: User Task List management
 */

/**
 * @swagger
 * /api/tasklist:
 *   get:
 *     summary: Get user task list
 *     tags: [UserTaskList]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *   post:
 *     summary: Create a new task
 *     tags: [UserTaskList]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskInput'
 *           example:
 *             user: 610f9c8e33dc885c93a215d7
 *             trader: 610f9c8e33dc885c93a215d8
 *             service: 610f9c8e33dc885c93a215d9
 *             subtasks: [610f9c8e33dc885c93a215da, 610f9c8e33dc885c93a215db]
 *             date: "2023-07-22T12:00:00Z"
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *             example:
 *               _id: 610f9c8e33dc885c93a215dc
 *               user: 610f9c8e33dc885c93a215d7
 *               trader: 610f9c8e33dc885c93a215d8
 *               service: 610f9c8e33dc885c93a215d9
 *               subtasks: [610f9c8e33dc885c93a215da, 610f9c8e33dc885c93a215db]
 *               date: "2023-07-22T12:00:00Z"
 *               status: "pending"
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error.
 *               example:
 *                 error: Invalid request
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error.
 *               example:
 *                 error: Unauthorized access
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error.
 *               example:
 *                 error: Internal server error
 * 
 * /api/tasklist/{id}:
 *   put:
 *     summary: Update a task by ID
 *     tags: [UserTaskList]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215dc
 *         required: true
 *         description: ID of the task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskInput'
 *           example:
 *             date: "2023-07-22T14:00:00Z"
 *             status: "completed"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *             example:
 *               _id: 610f9c8e33dc885c93a215dc
 *               user: 610f9c8e33dc885c93a215d7
 *               trader: 610f9c8e33dc885c93a215d8
 *               service: 610f9c8e33dc885c93a215d9
 *               subtasks: [610f9c8e33dc885c93a215da, 610f9c8e33dc885c93a215db]
 *               date: "2023-07-22T14:00:00Z"
 *               status: "completed"
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error.
 *               example:
 *                 error: Invalid request
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error.
 *               example:
 *                 error: Unauthorized access
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error.
 *               example:
 *                 error: Internal server error
 *
 *   delete:
 *     summary: Delete a task by ID
 *     tags: [UserTaskList]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215dc
 *         required: true
 *         description: ID of the task
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *               example:
 *                 message: Task deleted successfully
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error.
 *               example:
 *                 error: Unauthorized access
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error.
 *               example:
 *                 error: Internal server error
 */

const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getUserTaskList,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/userTaskListController');

router.route('/tasklist').get(protect, getUserTaskList).post(protect, createTask);
router.route('/tasklist/:id').put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;
