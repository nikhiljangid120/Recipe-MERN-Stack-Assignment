const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');
require('dotenv').config({ path: '../.env' });

const recipes = [
    {
        name: "Paneer Butter Masala",
        cuisine: "Indian",
        isVegetarian: true,
        prepTimeMinutes: 30,
        difficulty: "medium",
        image: "https://vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg",
        ingredients: ["Paneer", "Butter", "Tomato Puree", "Cream", "Cashews", "Spices"],
        instructions: "1. Fry paneer cubes. 2. Sauté spices and tomato puree. 3. Add cream and cashews paste. 4. Simmer with paneer.",
        tags: ["Dinner", "Curry", "Vegetarian"]
    },
    {
        name: "Chicken Biryani",
        cuisine: "Indian",
        isVegetarian: false,
        prepTimeMinutes: 60,
        difficulty: "hard",
        image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
        image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
        ingredients: ["Basmati Rice", "Chicken", "Yogurt", "Onions", "Spices", "Saffron"],
        instructions: "1. Marinate chicken. 2. Cook rice till 70% done. 3. Layer chicken and rice. 4. Dum cook for 20 mins.",
        tags: ["Dinner", "Rice", "Spicy"]
    },
    {
        name: "Masala Dosa",
        cuisine: "Indian",
        isVegetarian: true,
        prepTimeMinutes: 20,
        difficulty: "medium",
        image: "https://aroundtheyum.com/wp-content/uploads/2025/06/masala-dosa-recipe-.jpg",
        ingredients: ["Rice Batter", "Potato Masala", "Mustard Seeds", "Curry Leaves", "Sambar"],
        instructions: "1. Spread batter on hot tawa. 2. Add oil and cook till crisp. 3. Place potato masala inside and fold.",
        tags: ["Breakfast", "South Indian", "Crispy"]
    },
    {
        name: "Chole Bhature",
        cuisine: "Indian",
        isVegetarian: true,
        prepTimeMinutes: 45,
        difficulty: "medium",
        image: "https://www.spiceupthecurry.com/wp-content/uploads/2015/03/Chole-bhature-1.jpg",
        ingredients: ["Chickpeas", "Maida Flour", "Onions", "Tomatoes", "Spices", "Yogurt"],
        instructions: "1. Cook spicy chickpea curry. 2. Deep fry fluffy bhature bread. 3. Serve hot with onions.",
        tags: ["Lunch", "North Indian", "Indulgent"]
    },
    {
        name: "Palak Paneer",
        cuisine: "Indian",
        isVegetarian: true,
        prepTimeMinutes: 30,
        difficulty: "medium",
        image: "https://www.cookwithmanali.com/wp-content/uploads/2019/08/Palak-Paneer-500x500.jpg",
        ingredients: ["Spinach", "Paneer", "Garlic", "Ginger", "Cream", "Spices"],
        instructions: "1. Blanch spinach and puree. 2. Sauté aromatics and spices. 3. Simmer puree with paneer cubes.",
        tags: ["Dinner", "Healthy", "Vegetarian"]
    },
    {
        name: "Aloo Gobi",
        cuisine: "Indian",
        isVegetarian: true,
        prepTimeMinutes: 25,
        difficulty: "easy",
        image: "https://veganhuggs.com/wp-content/uploads/2021/04/aloo-gobi-in-bowl-side-view.jpg",
        ingredients: ["Potatoes", "Cauliflower", "Turmeric", "Cumin", "Ginger", "Coriander"],
        instructions: "1. Sauté spices. 2. Add potatoes and cauliflower. 3. Steam cook/fry until tender. 4. Garnish with coriander.",
        tags: ["Lunch", "Vegan", "Home Style"]
    },
    {
        name: "Samosa",
        cuisine: "Indian",
        isVegetarian: true,
        prepTimeMinutes: 40,
        difficulty: "medium",
        image: "https://kfoods.com/images1/newrecipeicon/samosa_9625.jpg",
        ingredients: ["Flour", "Potatoes", "Peas", "Spices", "Oil", "Chutney"],
        instructions: "1. Prepare dough and filling. 2. Shape into cones and stuff. 3. Deep fry until golden brown.",
        tags: ["Snack", "Street Food", "Crispy"]
    },
    {
        name: "Gulab Jamun",
        cuisine: "Indian",
        isVegetarian: true,
        prepTimeMinutes: 30,
        difficulty: "medium",
        image: "https://www.foodie-trail.com/wp-content/uploads/2020/04/PHOTO-2022-02-12-20-04-41_1.jpg",
        ingredients: ["Milk Powder", "Sugar", "Rose Water", "Cardamom", "Ghee"],
        instructions: "1. Make dough balls. 2. Deep fry at low heat. 3. Soak in warm sugar syrup.",
        tags: ["Dessert", "Sweet", "Festive"]
    },

    {
        name: "Classic Margherita Pizza",
        cuisine: "Italian",
        isVegetarian: true,
        prepTimeMinutes: 45,
        difficulty: "medium",
        image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
        ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Fresh Basil", "Olive Oil"],
        instructions: "1. Roll out dough. 2. Spread sauce. 3. Add cheese and basil. 4. Bake at 450°F for 12-15 mins.",
        tags: ["Lunch", "Italian", "Classic"]
    },
    {
        name: "Beef Burger",
        cuisine: "American",
        isVegetarian: false,
        prepTimeMinutes: 20,
        difficulty: "medium",
        image: "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
        ingredients: ["Beef Patty", "Burger Bun", "Lettuce", "Cheese", "Onion", "Pickles"],
        instructions: "1. Grill patty. 2. Toast bun. 3. Assemble burger with cheese and veggies.",
        tags: ["Lunch", "Fast Food", "Classic"]
    },
    {
        name: "Japanese Ramen",
        cuisine: "Japanese",
        isVegetarian: false,
        prepTimeMinutes: 60,
        difficulty: "hard",
        image: "https://www.themealdb.com/images/media/meals/118oj61763423896.jpg",
        ingredients: ["Ramen Noodles", "Broth", "Pork Belly", "Egg", "Green Onions", "Nori"],
        instructions: "1. Prepare broth (slow cook). 2. Cook pork belly. 3. Boil noodles. 4. Assemble bowl with toppings.",
        tags: ["Soup", "Comfort Food", "Asian"]
    },
    {
        name: "Chocolate Lava Cake",
        cuisine: "French",
        isVegetarian: true,
        prepTimeMinutes: 25,
        difficulty: "medium",
        image: "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg",
        ingredients: ["Dark Chocolate", "Butter", "Eggs", "Sugar", "Flour"],
        instructions: "1. Melt chocolate and butter. 2. Whisk eggs and sugar. 3. Combine and bake at 425°F for 12 mins. 4. Serve warm.",
        tags: ["Dessert", "Sweet", "Indulgent"]
    }
];

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/recipe-explorer')
    .then(async () => {
        console.log('MongoDB Connected for Seeding');
        await Recipe.deleteMany({});
        console.log('Cleared existing recipes');
        await Recipe.insertMany(recipes);
        console.log('Seeded ' + recipes.length + ' new recipes');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error("Seed Error:", err);
        mongoose.connection.close();
    });