const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');


router.get('/', async (req, res) => {
    try {
        const { search, cuisine, isVegetarian, maxTime, difficulty } = req.query;

        let query = {};


        if (search) {
            query.$text = { $search: search };
        }


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


router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


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
