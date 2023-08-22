/**
 * @swagger
 * tags:
 *   name: Traders
 *   description: Trader management
 */

/**
 * @swagger
 * /api/traders:
 *   get:
 *     summary: Get all traders
 *     tags: [Traders]
 *     responses:
 *       200:
 *         description: OK
 * 
 *   post:
 *     summary: Create a new trader
 *     tags: [Traders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               company:
 *                 type: string
 *                 example: ABC Company
 *               email:
 *                 type: string
 *                 format: email
 *                 example: abc@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *               location:
 *                 type: string
 *                 example: 123 Main St, City
 *               services:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: Plumbing
 *             required:
 *               - company
 *               - email
 *               - password
 *               - location
 *               - services
 *     responses:
 *       201:
 *         description: Created
 */

/**
 * @swagger
 * /api/traders/{id}:
 *   get:
 *     summary: Get a trader by ID
 *     tags: [Traders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215d7
 *         required: true
 *         description: ID of the trader
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Trader not found
 * 
 *   put:
 *     summary: Update trader password
 *     tags: [Traders]
 *     parameters:
 *       - in: path
 *         name: traderId
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215d7
 *         required: true
 *         description: ID of the trader
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currentPassword:
 *                 type: string
 *                 example: password123
 *               newPassword:
 *                 type: string
 *                 example: newpassword456
 *             required:
 *               - currentPassword
 *               - newPassword
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       401:
 *         description: Invalid current password
 *       404:
 *         description: Trader not found
 * 
 *   delete:
 *     summary: Delete a trader by ID (optional)
 *     tags: [Traders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215d7
 *         required: true
 *         description: ID of the trader
 *     responses:
 *       200:
 *         description: Trader deleted successfully
 *       404:
 *         description: Trader not found
 * 
 * /api/traders/login:
 *   post:
 *     summary: Login as a trader
 *     tags: [Traders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: abc@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Successful login
 *       401:
 *         description: Invalid credentials
 * 
 */

const express = require('express');
const router = express.Router();
const traderController = require('../controllers/traderController');
const { body } = require('express-validator');

// Routes for traders
router.get('/traders', traderController.getAllTraders);
router.get('/traders/:id', traderController.getTraderById);
router.post('/traders', [
  // Validation for request body
  body('company').notEmpty().withMessage('Company name is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('location').notEmpty().withMessage('Location is required'),
  body('services').isArray().withMessage('Services must be an array')
], traderController.createTrader);

// Route for trader login
router.post('/traders/login', [
  // Validation for request body
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').notEmpty().withMessage('Password is required')
], traderController.loginTrader);

// Route for updating trader password
router.put('/traders/:traderId', [
  // Validation for request body
  body('currentPassword').notEmpty().withMessage('Current password is required'),
  body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters long')
], traderController.updateTraderPassword);

module.exports = router;


