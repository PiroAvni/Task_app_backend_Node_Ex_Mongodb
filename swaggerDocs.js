const swaggerJsdoc = require('swagger-jsdoc');

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'TRADERS-API Documentation',
      description: 'RESTful API for managing users, traders, services, bookings, and more.',
      version: '1.0.0',
      license: {
        name: 'MIT',
        url: 'http://www.opensource.org/licenses/',
      },
      contact: {
        name: 'Traders',
        url: 'http://',
        email: 'info@traders.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8000/',
      },
    ],
    components: {
      schemas: {
        // Define your schemas here (e.g., User, Trader, etc.)
        User: {
          type: 'object',
          properties: {
            // Define properties for User schema
            _id: {
              type: 'string',
              example: '610f9c8e33dc885c93a215d7',
            },
            username: {
              type: 'string',
              example: 'john_doe',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'john@example.com',
            },
            address: {
              type: 'string',
              example: '123 Main St, City',
            },
            // Add other properties as needed
          },
          required: ['username', 'email', 'address'],
        },
        Trader: {
          type: 'object',
          properties: {
            // Define properties for Trader schema
            company: {
              type: 'string',
              example: 'ABC Company',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'abc@example.com',
            },
            password: {
              type: 'string',
              example: 'password123',
            },
            location: {
              type: 'string',
              example: '123 Main St, City',
            },
            services: {
              type: 'array',
              items: {
                type: 'string',
              },
              example: ['Plumbing', 'Electrical'],
            },
            // Add other properties as needed
          },
          required: ['company', 'email', 'password', 'location', 'services'],
        },
        // Define other schemas (e.g., Booking, Testimonial, Task, etc.) in a similar manner.
      },
    },
    parameters: {
      limitQueryParam: {
        name: 'limit',
        in: 'query',
        description: 'The maximum number of users to retrieve. Default is 10.',
        schema: {
          type: 'integer',
          minimum: 1,
          maximum: 100,
        },
      },
      idPathParam: {
        name: 'id',
        in: 'path',
        description: 'ID of the user/trader/booking/testimonial, etc.',
        schema: {
          type: 'string',
          example: '610f9c8e33dc885c93a215d7',
        },
        required: true,
      },
    },
  },
  // List of files to be processed.
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = swaggerDocs;






module.exports = swaggerDocs;
