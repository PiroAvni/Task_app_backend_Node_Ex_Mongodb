/**
 * @swagger
 * tags:
 *   name: Chats
 *   description: Chat message management
 */

/**
 * @swagger
 * /api/chats:
 *   get:
 *     summary: Get all chat messages
 *     tags: [Chats]
 *     responses:
 *       200:
 *         description: OK
 * 
 *   post:
 *     summary: Send a chat message
 *     tags: [Chats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215d7
 *               trader:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215d8
 *               booking:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215e9
 *               message:
 *                 type: string
 *                 example: Hello, how can I help you?
 *             required:
 *               - user
 *               - trader
 *               - booking
 *               - message
 *     responses:
 *       201:
 *         description: Created
 */

/**
 * @swagger
 * /api/chats/{id}:
 *   get:
 *     summary: Get a chat message by ID
 *     tags: [Chats]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215f1
 *         required: true
 *         description: ID of the chat message
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Chat message not found
 */

/**
 * @swagger
 * /api/chats/history/{userId}/{traderId}:
 *   get:
 *     summary: Get chat history for a specific user and trader
 *     tags: [Chats]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215d7
 *         required: true
 *         description: ID of the user
 *       - in: path
 *         name: traderId
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215d8
 *         required: true
 *         description: ID of the trader
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Chat history not found
 */
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Routes for chats
router.get('/chats', chatController.getAllChats);
router.get('/chats/:id', chatController.getChatById);
router.post('/chats', chatController.createChat);

// Route for retrieving chat history for a specific user and trader
router.get('/chats/history/:userId/:traderId', chatController.getChatHistory);

module.exports = router;

