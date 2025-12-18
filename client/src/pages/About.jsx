import React from 'react';
import Navbar from '../components/Navbar';
import { ChefHat, Code, Database, Cpu } from 'lucide-react';

const About = () => {
    return (
        <div style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
            <Navbar />
            <div className="container" style={{ marginTop: '8rem', maxWidth: '800px' }}>
                <div className="glass-panel" style={{ padding: '3rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', textAlign: 'center' }}>
                        About <span style={{ color: 'var(--accent)' }}>SmartRecipe</span>
                    </h1>

                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '3rem', textAlign: 'center' }}>
                        SmartRecipe is a next-generation culinary explorer built to demonstrate the power of the MERN stack integrated with modern AI.
                        It goes beyond simple data retrieval by providing intelligent, context-aware recipe insights.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                        Tech Stack
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '10px', borderRadius: '12px' }}>
                                <Code color="#61dafb" size={24} />
                            </div>
                            <div>
                                <div style={{ fontWeight: '600' }}>Frontend</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>React + Vite</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '10px', borderRadius: '12px' }}>
                                <Database color="#10b981" size={24} />
                            </div>
                            <div>
                                <div style={{ fontWeight: '600' }}>Backend</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Node + MongoDB</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: 'rgba(244, 63, 94, 0.1)', padding: '10px', borderRadius: '12px' }}>
                                <Cpu color="#f43f5e" size={24} />
                            </div>
                            <div>
                                <div style={{ fontWeight: '600' }}>AI Engine</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Groq / Llama 3</div>
                            </div>
                        </div>
                    </div>

                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Key Features</h2>
                    <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', lineHeight: '2' }}>
                        <li>✨ <strong>Midnight Glass UI</strong>: A premium, dark-mode aesthetic.</li>
                        <li>🤖 <strong>AI Chef's Twist</strong>: Get smart explanations for any dish.</li>
                        <li>❤️ <strong>Favorites</strong>: Save your top picks locally.</li>
                        <li>🔍 <strong>Smart Filtering</strong>: Instantly find vegetarian or quick meals.</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default About;
