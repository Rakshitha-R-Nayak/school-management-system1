const express = require('express');
const bcrypt = require('bcryptjs'); // For password hashing
const User = require('./models/User'); // Import the User model
const router = express.Router();

router.post('/api/register', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Basic validation
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword, // Confirm password is not needed for storage
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
