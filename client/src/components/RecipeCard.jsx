import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const RecipeCard = ({ recipe }) => {
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
        setIsSaved(saved.some(r => r._id === recipe._id));
    }, [recipe._id]);

    const toggleSave = (e) => {
        e.preventDefault();
        const saved = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
        if (isSaved) {
            const newSaved = saved.filter(r => r._id !== recipe._id);
            localStorage.setItem('savedRecipes', JSON.stringify(newSaved));
            setIsSaved(false);
        } else {
            saved.push(recipe);
            localStorage.setItem('savedRecipes', JSON.stringify(saved));
            setIsSaved(true);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-panel"
            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}
        >
            <button
                onClick={toggleSave}
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    cursor: 'pointer',
                    backdropFilter: 'blur(4px)'
                }}
            >
                <Heart size={18} color={isSaved ? "var(--accent)" : "white"} fill={isSaved ? "var(--accent)" : "none"} />
            </button>

            <div style={{ position: 'relative', height: '200px' }}>
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(0,0,0,0.7)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                }}>
                    {recipe.cuisine}
                </div>
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>{recipe.name}</h3>
                </div>

                <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={16} /> {recipe.prepTimeMinutes}m
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <ChefHat size={16} /> {recipe.difficulty}
                    </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {recipe.tags && recipe.tags.slice(0, 3).map(tag => (
                        <span key={tag} style={{
                            background: 'rgba(255,255,255,0.05)',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            color: 'var(--text-secondary)'
                        }}>
                            #{tag}
                        </span>
                    ))}
                </div>

                <Link to={`/recipe/${recipe._id}`} className="btn btn-primary" style={{ marginTop: 'auto', textAlign: 'center' }}>
                    View Recipe
                </Link>
            </div>
        </motion.div>
    );
};

export default RecipeCard;
