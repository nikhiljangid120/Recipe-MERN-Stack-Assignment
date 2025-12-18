import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import RecipeCard from '../components/RecipeCard';
import { Heart } from 'lucide-react';

const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
        setSavedRecipes(saved);
    }, []);

    return (
        <div style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
            <Navbar />
            <div className="container" style={{ marginTop: '8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Heart color="var(--accent)" fill="var(--accent)" size={32} />
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Your Favorite Recipes</h1>
                </div>

                {savedRecipes.length > 0 ? (
                    <div className="grid-recipes">
                        {savedRecipes.map(recipe => (
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        ))}
                    </div>
                ) : (
                    <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
                        <Heart size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No recipes saved yet</h2>
                        <p>Start exploring and heart your favorites to see them here!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SavedRecipes;
