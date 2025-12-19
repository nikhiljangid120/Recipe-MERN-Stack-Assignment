require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

console.log("Starting Server...");
console.log("GROQ_API_KEY Present:", !!process.env.GROQ_API_KEY);
if (process.env.GROQ_API_KEY) {
    console.log("Key length:", process.env.GROQ_API_KEY.length);
} else {
    console.log("WARNING: GROQ_API_KEY is missing in process.env");
}

// Middleware
app.use(cors());
app.use(express.json()); 

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/recipe-explorer', {
    // Options are no longer needed in Mongoose 6+ but keeping for clarity if using older versions
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes Placeholder
app.get('/', (req, res) => {
    res.send('Smart Recipe Explorer API is running...');
});

// Routes
const recipeRoutes = require('./routes/recipes');
const aiRoutes = require('./routes/ai');

app.use('/api/recipes', recipeRoutes);
app.use('/api/ai', aiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
