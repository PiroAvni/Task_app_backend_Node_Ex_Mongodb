/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Payment management
 */

/**
 * @swagger
 * /api/payments:
 *   get:
 *     summary: Get all payments
 *     tags: [Payments]
 *     responses:
 *       200:
 *         description: OK
 * 
 *   post:
 *     summary: Create a new payment
 *     tags: [Payments]
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
 *               amount:
 *                 type: number
 *                 example: 100
 *               date:
 *                 type: string
 *                 format: date
 *                 example: '2023-07-31'
 *               status:
 *                 type: string
 *                 example: pending
 *             required:
 *               - user
 *               - trader
 *               - amount
 *               - date
 *               - status
 *     responses:
 *       201:
 *         description: Created
 */

/**
 * @swagger
 * /api/payments/{id}:
 *   get:
 *     summary: Get a payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215e7
 *         required: true
 *         description: ID of the payment
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Payment not found
 */
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentContoller');

// Routes for payments
router.get('/payments', paymentController.getAllPayments);
router.get('/payments/:id', paymentController.getPaymentById);
router.post('/payments', paymentController.createPayment);

module.exports = router;

