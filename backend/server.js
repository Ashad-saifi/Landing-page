import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'messages.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Ensure data directory and file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Helper to read messages
const readMessages = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading messages:', error);
    return [];
  }
};

// Helper to write messages
const writeMessages = (messages) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing messages:', error);
  }
};

// Routes
// 1. Health check / status
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// 2. Submit contact message
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const messages = readMessages();
  const newMessage = {
    id: Date.now().toString(),
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
    status: 'unread' // 'unread' or 'resolved'
  };

  messages.unshift(newMessage); // Add new message to the top
  writeMessages(messages);

  res.status(201).json({ success: true, message: 'Message logged successfully!', data: newMessage });
});

// 3. Get all contact messages
app.get('/api/contact', (req, res) => {
  const messages = readMessages();
  res.json(messages);
});

// 4. Update message status (e.g. resolve)
app.patch('/api/contact/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ error: 'Status is required.' });
  }

  const messages = readMessages();
  const index = messages.findIndex(m => m.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Message not found.' });
  }

  messages[index].status = status;
  writeMessages(messages);

  res.json({ success: true, data: messages[index] });
});

// 5. Delete a message
app.delete('/api/contact/:id', (req, res) => {
  const { id } = req.params;
  let messages = readMessages();
  const exists = messages.some(m => m.id === id);

  if (!exists) {
    return res.status(404).json({ error: 'Message not found.' });
  }

  messages = messages.filter(m => m.id !== id);
  writeMessages(messages);

  res.json({ success: true, message: 'Message deleted successfully.' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
