import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RecipeCard from '../components/RecipeCard';
import SkeletonCard from '../components/SkeletonCard';
import { Sparkles } from 'lucide-react';
import API_BASE_URL from '../config';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRecipes = async (params = {}) => {
        setLoading(true);
        try {
            // Build query string
            const queryString = new URLSearchParams(params).toString();
            const res = await fetch(`${API_BASE_URL}/api/recipes?${queryString}`);
            const data = await res.json();
            setRecipes(data);
        } catch (err) {
            console.error("Failed to fetch recipes", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
            <Navbar />



            <Hero onSearch={fetchRecipes} />

            <main className="container">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Sparkles color="var(--accent)" />
                    <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>Trending Recipes</h2>
                </div>

                {loading ? (
                    <div className="grid-recipes">
                        {[...Array(6)].map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                ) : recipes.length > 0 ? (
                    <div className="grid-recipes">
                        {recipes.map(recipe => (
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        No recipes found. Try adjusting your filters.
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;
