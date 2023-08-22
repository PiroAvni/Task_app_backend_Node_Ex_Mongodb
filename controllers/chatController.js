// controllers/chatController.js
const Chat = require('../models/chat');

// Controller for getting all chats
exports.getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find();
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for getting a single chat by ID
exports.getChatById = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat) {
      return res.status(404).json({ error: 'Chat not found' });
    }
    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for creating a new chat
exports.createChat = async (req, res) => {
  try {
    const { user, trader, booking, messages } = req.body;
    const chat = new Chat({ user, trader, booking, messages });
    await chat.save();
    res.status(201).json(chat);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for retrieving chat history for a specific user and trader
exports.getChatHistory = async (req, res) => {
  try {
    const { userId, traderId } = req.params;
    const chatHistory = await ChatMessage.find({ user: userId, trader: traderId }).sort('timestamp');
    res.json(chatHistory);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};