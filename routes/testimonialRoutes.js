/**
 * @swagger
 * tags:
 *   name: Testimonials
 *   description: Testimonial management
 */

/**
 * @swagger
 * /api/testimonials:
 *   get:
 *     summary: Get all testimonials
 *     tags: [Testimonials]
 *     responses:
 *       200:
 *         description: OK
 * 
 *   post:
 *     summary: Create a new testimonial
 *     tags: [Testimonials]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               trader:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215d8
 *               user:
 *                 type: string
 *                 example: 610f9c8e33dc885c93a215d7
 *               comment:
 *                 type: string
 *                 example: Excellent service!
 *               rating:
 *                 type: number
 *                 example: 5
 *             required:
 *               - trader
 *               - user
 *               - comment
 *               - rating
 *     responses:
 *       201:
 *         description: Created
 */

/**
 * @swagger
 * /api/testimonials/{id}:
 *   get:
 *     summary: Get a testimonial by ID
 *     tags: [Testimonials]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 610f9c8e33dc885c93a215d9
 *         required: true
 *         description: ID of the testimonial
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Testimonial not found
 */
const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');

// Routes for testimonials
router.get('/testimonials', testimonialController.getAllTestimonials);
router.get('/testimonials/:id', testimonialController.getTestimonialById);
router.post('/testimonials', testimonialController.createTestimonial);

module.exports = router;

