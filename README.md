# Smart Recipe Explorer 🍳

A modern, AI-powered recipe application built with the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates a full-stack integration with advanced features including Generative AI for recipe insights, specific regional content (Indian Cuisine), and a premium glassmorphism UI.

## 🚀 Features

### Core MERN Features
-   **Recipe Gallery**: Browse a visually stunning grid of recipes.
-   **Recipe Details**: View comprehensive details including ingredients, instructions, and cooking time.
-   **Search & Filter**: Real-time filtering by Cuisine, Difficulty, Dietary Preference, and Prep Time.
-   **Responsive Design**: Fully responsive layout with a custom mobile-optimized navigation.

### 🤖 AI Integration (Bonus)
-   **Chef's Digital Twist**: Integrated **Groq (Llama 3)** to provide "Chef's Insights" - a simplified, fun explanation of any recipe.
-   **Robust Fallback**: Includes a simulated AI response mechanism if API quotas are exceeded, ensuring the feature is always demonstrable.

### ✨ UX Enhancements
-   **Midnight Glass UI**: A custom-designed dark theme with glassmorphism effects and neon accents.
-   **Saved Recipes**: Functionality to "Heart" recipes and save them locally (LocalStorage).
-   **Loading Skeletons**: Professional shimmer animations during data fetching.
-   **Interactive Home Page**: Dynamic Hero section with floating animations.

## 🛠️ Tech Stack

-   **Frontend**: React (Vite), Framer Motion (Animations), Lucide React (Icons), CSS Modules.
-   **Backend**: Node.js, Express.js.
-   **Database**: MongoDB (Mongoose ODM).
-   **AI Engine**: Groq SDK (Llama 3 Model).
-   **Testing**: Node.js native test runner.

## 📥 Installation & Setup

### 1. Prerequisites
-   Node.js installed.
-   MongoDB running locally or a generic connection string.

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/recipe-explorer
GROQ_API_KEY=your_groq_api_key_here
```
*(Note: If no API key is provided, the AI feature will simply use the simulation mode).*

**Seed the Database (Optional but Recommended):**
```bash
node scripts/seed.js
```

**Start the Server:**
```bash
npm start
```

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```

The application should now be running at `http://localhost:5173`.

## 🧪 Running Tests
To verify the backend constraints and API logic:
```bash
cd server
npm test
```

## 📂 Project Structure
```
/root
  /client         # React Frontend
    /src
      /components # Reusable UI components (RecipeCard, Navbar, etc.)
      /pages      # Route views (Home, RecipeDetail, Saved, etc.)
  /server         # Express Backend
    /models       # Mongoose Schemas
    /routes       # API Endpoints
    /scripts      # Database Seeding
    /test         # Automated Tests
```

## 📝 Assignment Notes
-   **Majority Indian Dishes**: The database is seeded with 8 Indian dishes and 4 International favorites as requested.
-   **Image Stability**: All images are sourced from reliable public CDNs to prevent hotlinking errors.

---
Built with ❤️ for the MERN Stack Assignment.
