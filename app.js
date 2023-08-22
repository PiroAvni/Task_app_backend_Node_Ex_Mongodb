// app.js
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors')
const logger = require('./middleware/logger')

const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerDocs');
const swaggerJsdoc = require('swagger-jsdoc');


const socketIO = require('socket.io');

// Import routes
const traderRoutes = require('./routes/traderRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const taskRoutes = require('./routes/taskRoutes');
const subtaskRoutes = require('./routes/subtaskRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const chatRoutes = require('./routes/chatRoutes');
const userTaskListRoutes = require('./routes/userTaskListRoutes');

require('dotenv').config()
const connectDB = require('./config/db-setup.js')
const cookieParser = require('cookie-parser')
connectDB()

// Create the Express app and HTTP server
const app = express();
const server = http.createServer(app);
// Set up Socket.IO
const io = socketIO(server);


// Parse incoming JSON data
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(logger)



// Socket.IO connection event
io.on('connection', (socket) => {
  console.log('A user connected');

// Handle chat messages
socket.on('message', async (data) => {
  // Save the chat message to MongoDB
  const { user, trader, message } = data;
  const chatMessage = new Chat({ user, trader, message });
  await chatMessage.save();

  // Broadcast the message to all connected clients
  io.emit('message', chatMessage);
});

 // Handle disconnections
 socket.on('disconnect', () => {
  console.log('A user disconnected');
});
});

//  routes
app.use('/api/trader', traderRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/users', userRoutes);
app.use('/api/testimonial', testimonialRoutes);
app.use('/api/task', taskRoutes);
app.use('/api/subtask', subtaskRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/usertasklist', userTaskListRoutes);

app.get('/', (req, res) => {
  res.json({ App: 'Welcome to the Server!!' })
})


// Serve the Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {explorer:true}));







module.exports = app

