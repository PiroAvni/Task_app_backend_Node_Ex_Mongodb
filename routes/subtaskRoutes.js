/**
 * @swagger
 * tags:
 *   name: Subtasks
 *   description: Subtask management
 */

/**
 * @swagger
 * /api/subtasks:
 *   get:
 *     summary: Get all subtasks
 *     tags: [Subtasks]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subtask'
 * 
 *   post:
 *     summary: Create a new subtask
 *     tags: [Subtasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateSubtaskInput'
 *           example:
 *             name: Plumbing
 *             description: Plumbing Services
 *             serviceId: 610f9c8e33dc885c93a215d1
 *             pricePerHour: 25
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subtask'
 * 
 * components:
 *   schemas:
 *     Subtask:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the subtask.
 *         name:
 *           type: string
 *           description: The name of the subtask.
 *         description:
 *           type: string
 *           description: The description of the subtask.
 *         service:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The ID of the associated service.
 *             name:
 *               type: string
 *               description: The name of the associated service.
 *         pricePerHour:
 *           type: number
 *           description: The price per hour for the subtask.
 *       required:
 *         - name
 *         - service
 *         - pricePerHour
 *     CreateSubtaskInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the subtask.
 *         description:
 *           type: string
 *           description: The description of the subtask.
 *         serviceId:
 *           type: string
 *           description: The ID of the associated service.
 *         pricePerHour:
 *           type: number
 *           description: The price per hour for the subtask.
 *       required:
 *         - name
 *         - serviceId
 *         - pricePerHour
 */
const express = require('express');
const router = express.Router();
const subtaskController = require('../controllers/subtaskController');

// Routes for subtasks
router.get('/subtasks', subtaskController.getAllSubtasks);
router.get('/subtasks/:id', subtaskController.getSubtaskById);
router.post('/subtasks', subtaskController.createSubtask);
router.put('/subtasks/:id', subtaskController.updateSubtaskById);
router.delete('/subtasks/:id', subtaskController.deleteSubtaskById);

module.exports = router;
