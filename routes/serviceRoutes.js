/**
 * @swagger
 * tags:
 *   name: Services
 *   description: Service management
 */

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Get all services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 * 
 *   post:
 *     summary: Create a new service
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateServiceInput'
 *           example:
 *             name: Handyman
 *             description: General Handyman Services
 *             pricePerHour: 30
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 * 
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the service.
 *         name:
 *           type: string
 *           description: The name of the service.
 *         description:
 *           type: string
 *           description: The description of the service.
 *         pricePerHour:
 *           type: number
 *           description: The price per hour for the service.
 *       required:
 *         - name
 *         - pricePerHour
 *     CreateServiceInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the service.
 *         description:
 *           type: string
 *           description: The description of the service.
 *         pricePerHour:
 *           type: number
 *           description: The price per hour for the service.
 *       required:
 *         - name
 *         - pricePerHour
 */

const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Routes for services
router.get('/services', serviceController.getAllServices);
router.get('/services/:id', serviceController.getServiceById);
router.post('/services', serviceController.createService);

module.exports = router;

