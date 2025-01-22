const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

//Integrate Routes
const taskRoutes = require('./routes/task.routes');
app.use('/api', taskRoutes);  




//mongodb://localhost:27017/mean-app

// MongoDB Connection
mongoose
  .connect('mongodb+srv://admin:<db_password>@bisalcluster.9crsvzy.mongodb.net/?retryWrites=true&w=majority&appName=bisalcluster', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Basic Route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
