const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    cuisine: {
        type: String,
        required: true,
        index: true
    },
    isVegetarian: {
        type: Boolean,
        default: false
    },
    prepTimeMinutes: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String], // Array of strings
        required: true
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        default: 'medium'
    },
    instructions: {
        type: String, // Storing as a single formatted string for simplicity, or could be array
        required: true
    },
    tags: {
        type: [String],
        index: true
    },
    image: {
        type: String, // URL to image
        default: 'https://placehold.co/600x400?text=Delicious+Food'
    }
}, {
    timestamps: true
});

// Text index for search
RecipeSchema.index({ name: 'text', ingredients: 'text', tags: 'text' });

module.exports = mongoose.model('Recipe', RecipeSchema);
