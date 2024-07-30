const express = require('express');
const connectDB = require('./db'); // Import the connection function
const userRoutes = require('./routes/users'); // Import the user routes

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // For parsing application/json

// Use the routes
app.use('/api', userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
