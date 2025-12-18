# Smart Recipe Explorer 🍳

Welcome to **Smart Recipe Explorer**! This isn't just another recipe app; it's a showcase of how modern web technologies (MERN Stack) can blend with Generative AI to create a truly delicious user experience.

I built this project to demonstrate a full-stack application that goes beyond basic CRUD operations. It features a custom "Midnight Glass" UI, intelligent AI chef integration, and a responsive design that feels great on any device.

## 🌟 What Makes This Special?

### 1. The "AI Chef" Experience 🤖
I integrated the **Groq API (Llama 3)** to give users a "Chef's Digital Twist". Instead of just reading instructions, you can ask the AI to explain the recipe in simple, fun terms. 
*(And yes, I built a reliable fallback mode so the feature works even if the API quota runs out during a demo!)*

### 2. Premium UI/UX 🎨
I didn't want a standard bootstrap look. I custom-coded a **Glassmorphism** aesthetic with neon accents using raw CSS and Framer Motion.
-   **Floating Hero Section**: Check out the home page animations!
-   **Mobile-First**: A slick hamburger menu for smaller screens.
-   **Smooth Loading**: Replaced boring spinners with shimmering skeleton screens.

### 3. Smart Features 🧠
-   **Advanced Filtering**: Find exactly what you want—filter by Indian cuisine, Vegetarian options, or cooking time.
-   **Favorites**: Heart the recipes you love to save them for later (uses LocalStorage, so no login needed yet!).

## 🛠️ Technology Stack

I utilized a robust and modern stack to build this:
-   **Frontend**: React.js (Vite) – for a blazing fast UI.
-   **Backend**: Node.js & Express – for a scalable API.
-   **Database**: MongoDB – to store our delicious data.
-   **AI**: Groq SDK – for the smarts.
-   **Styling**: CSS Modules & Lucide Icons.

## 🚀 How to Run It

Want to try it out? Follow these simple steps:

### 1. Get the Backend Running
Go to the server folder and install the dependencies:
```bash
cd server
npm install
```

Start the server:
```bash
npm start
```
*The backend runs on port 5000.*

### 2. Start the Frontend
Open a new terminal, go to the client folder, and fire it up:
```bash
cd client
npm install
npm run dev
```
*The app should open at `http://localhost:5173`.*

## 🧪 Testing
I've included backend tests to ensure the API is solid. You can run them via:
```bash
cd server
npm test
```

## 📝 A Note on Data
I've pre-loaded the database with a diverse mix of recipes, focusing heavily on **Indian Cuisine** (like Paneer Butter Masala, Biryani, Dosa) alongside some international favorites. All images are stable and hosted on public CDNs.

---
*Built with code, coffee, and a love for good food.*
