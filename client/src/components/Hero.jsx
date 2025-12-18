import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChefHat, UtensilsCrossed, Flame } from 'lucide-react';
import SearchBar from './SearchBar';

const Hero = ({ onSearch }) => {
    return (
        <section style={{ position: 'relative', padding: '8rem 2rem 6rem', overflow: 'hidden' }}>

            {/* Background Ambient Glows */}
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: -1 }}>
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, rgba(244, 63, 94, 0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-10%',
                    right: '-10%',
                    width: '30vw',
                    height: '30vw',
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
                    filter: 'blur(40px)'
                }} />
            </div>

            {/* Floating Decorative Icons */}
            <FloatingIcon icon={<ChefHat size={40} color="var(--accent)" />} top="15%" left="10%" delay={0} />
            <FloatingIcon icon={<UtensilsCrossed size={32} color="#94a3b8" />} top="25%" right="15%" delay={1} />
            <FloatingIcon icon={<Flame size={28} color="#f59e0b" />} bottom="20%" left="15%" delay={2} />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '50px', background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.2)', marginBottom: '1.5rem' }}>
                        <Sparkles size={16} color="var(--accent)" />
                        <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' }}>AI-Powered Kitchen</span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                        background: 'linear-gradient(to bottom right, #fff 30%, #94a3b8 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        textShadow: '0 20px 40px rgba(0,0,0,0.3)'
                    }}>
                        Taste the <span style={{
                            color: 'var(--accent)',
                            WebkitTextFillColor: 'var(--accent)',
                            position: 'relative',
                            display: 'inline-block'
                        }}>
                            Future
                            <svg width="100%" height="10" viewBox="0 0 100 10" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '5px', left: 0, opacity: 0.6 }}>
                                <path d="M0 5 Q 50 10 100 5" stroke="var(--accent)" strokeWidth="3" fill="none" />
                            </svg>
                        </span> <br /> of Cooking
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 3rem', lineHeight: '1.8' }}
                >
                    Discover thousands of recipes, generate smart shopping lists, and get instant culinary advice from our expert AI chef.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <SearchBar onSearch={onSearch} />
                </motion.div>

                {/* Stat Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '4rem' }}
                >
                    <StatItem value="10k+" label="Recipes" />
                    <StatItem value="AI" label="Powered" />
                    <StatItem value="4.9" label="Rating" />
                </motion.div>
            </div>
        </section>
    );
};

// Helper Components
const FloatingIcon = ({ icon, top, left, right, bottom, delay }) => (
    <motion.div
        animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0]
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
        style={{
            position: 'absolute',
            top, left, right, bottom,
            opacity: 0.3,
            zIndex: 0
        }}
    >
        {icon}
    </motion.div>
);

const StatItem = ({ value, label }) => (
    <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>{value}</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</div>
    </div>
);

export default Hero;
