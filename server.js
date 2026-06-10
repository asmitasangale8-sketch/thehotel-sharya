const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

app.get('/reservations', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'reservations.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'gallery.html'));
});

// API Routes
app.post('/api/reservations', (req, res) => {
  const { name, email, date, time, guests } = req.body;
  if (!name || !email || !date || !time || !guests) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  // Handle reservation logic here
  res.json({ message: 'Reservation received successfully', data: { name, email, date, time, guests } });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  // Handle contact form logic here
  res.json({ message: 'Message received successfully', data: { name, email, message } });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🏨 Hotel Sharya Server running on http://localhost:${PORT}`);
});
