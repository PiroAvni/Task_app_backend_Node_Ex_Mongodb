/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Booking management
 */

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: OK
 * 
 *   post:
 *     summary: Create a new booking
 *     tags: [Bookings]
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
 *               service:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215d1
 *               subtask:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215d3
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
 *               - service
 *               - subtask
 *               - date
 *               - status
 *     responses:
 *       201:
 *         description: Created
 */

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     summary: Get a booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215e3
 *         required: true
 *         description: ID of the booking
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Booking not found
 */
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Routes for bookings
router.get('/bookings', bookingController.getAllBookings);
router.get('/bookings/:id', bookingController.getBookingById);
router.post('/bookings', bookingController.createBooking);

module.exports = router;

