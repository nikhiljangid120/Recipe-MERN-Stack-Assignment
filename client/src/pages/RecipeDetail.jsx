import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AIModal from '../components/AIModal';
import { Clock, ChefHat, ArrowLeft, Heart, Sparkles, Loader, Wand2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import API_BASE_URL from '../config';
import { motion } from 'framer-motion';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    // AI State
    const [isAIModalOpen, setIsAIModalOpen] = useState(false);
    const [aiContent, setAiContent] = useState('');
    const [aiLoading, setAiLoading] = useState(false);
    const [aiType, setAiType] = useState('explain'); // explain or suggest (though suggest is usually global)

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                setRecipe(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleAskAI = async () => {
        setIsAIModalOpen(true);
        setAiLoading(true);
        setAiType('explain');
        setAiContent(""); // Reset content

        try {
            const res = await fetch(`${API_BASE_URL}/api/ai/explain`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    recipeName: recipe.name,
                    instructions: recipe.instructions
                })
            });

            // Handle Quota/Server Errors by falling back to simulation
            if (!res.ok) {
                throw new Error("API_ERROR");
            }

            const data = await res.json();
            if (!data.result) throw new Error("EMPTY_RESULT");
            setAiContent(data.result);

        } catch (err) {
            console.warn("AI Unavailable, using simulation:", err);
            // Fallback Simulation for "Stunning" Demo purposes
            const simulatedResponse = `✨ **Chef's Digital Twist (Simulated)**\n\nSince our AI chef is currently overwhelmed with requests (Quota Exceeded), here is a quick summary:\n\n**${recipe.name}** is a ${recipe.difficulty} level ${recipe.cuisine} dish. It takes about ${recipe.prepTimeMinutes} minutes.\n\n**Key Steps:**\n${recipe.instructions.substring(0, 150)}...\n\n*Tip: Enjoy this delicious meal with friends!*`;

            setAiContent(simulatedResponse.replace(/\*\*/g, '').replace(/\*/g, ''));
        } finally {
            setAiLoading(false);
        }
    };

    if (loading) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
    if (!recipe) return <div style={{ padding: '4rem', textAlign: 'center' }}>Recipe not found</div>;

    return (
        <div style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
            <Navbar />

            <main className="container" style={{ paddingTop: '2rem' }}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                    <ArrowLeft size={20} /> Back to Recipes
                </Link>

                <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                    {/* Left: Image & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid var(--glass-border)' }}>
                            <img src={recipe.image} alt={recipe.name} style={{ width: '100%', display: 'block' }} />
                        </div>

                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Prep Time</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>{recipe.prepTimeMinutes} m</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Difficulty</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: '700', textTransform: 'capitalize' }}>{recipe.difficulty}</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Cuisine</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>{recipe.cuisine}</div>
                                </div>
                            </div>

                            <button
                                onClick={handleAskAI}
                                className="btn"
                                style={{ width: '100%', background: 'linear-gradient(90deg, #8b5cf6, #ec4899)', color: 'white', border: 'none', boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)' }}
                            >
                                <Sparkles size={20} /> Ask AI Chef to Explain
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 style={{ fontSize: '3rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>{recipe.name}</h1>

                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                            {recipe.tags.map(tag => (
                                <span key={tag} style={{ background: 'var(--bg-secondary)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <ChefHat color="var(--accent)" /> Ingredients
                            </h2>
                            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                {recipe.ingredients.map((ing, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem' }}>
                                        <span style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%' }}></span>
                                        {ing}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Wand2 color="var(--accent)" /> Instructions
                            </h2>
                            <div className="glass-panel" style={{ padding: '2rem', lineHeight: '1.8', fontSize: '1.1rem', whiteSpace: 'pre-line' }}>
                                {recipe.instructions}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            <AIModal
                isOpen={isAIModalOpen}
                onClose={() => setIsAIModalOpen(false)}
                title="Chef's Critical Insight"
                content={aiContent}
                isLoading={aiLoading}
            />
        </div>
    );
};

export default RecipeDetail;
