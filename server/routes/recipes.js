const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// GET /api/recipes - Get all recipes with search & filters
router.get('/', async (req, res) => {
    try {
        const { search, cuisine, isVegetarian, maxTime, difficulty } = req.query;

        let query = {};

        // Text Search (Name, Ingredients, Tags)
        if (search) {
            query.$text = { $search: search };
        }

        // Filters
        if (cuisine) {
            query.cuisine = { $regex: cuisine, $options: 'i' };
        }
        if (isVegetarian) {
            query.isVegetarian = isVegetarian === 'true';
        }
        if (maxTime) {
            query.prepTimeMinutes = { $lte: parseInt(maxTime) };
        }
        if (difficulty) {
            query.difficulty = difficulty;
        }

        const recipes = await Recipe.find(query).sort({ createdAt: -1 });
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/recipes/:id - Get single recipe
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/recipes - Create new recipe
router.post('/', async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
