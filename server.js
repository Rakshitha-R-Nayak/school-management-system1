// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample in-memory user storage (replace with a database in a real app)
const users = [];

// POST endpoint to handle user registration
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  // Simple validation (add more robust validation in a real app)
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if the user already exists
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Save the new user (replace with a database call in a real app)
  const newUser = { id: users.length + 1, username, email, password };
  users.push(newUser);

  // Respond with a success message
  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
