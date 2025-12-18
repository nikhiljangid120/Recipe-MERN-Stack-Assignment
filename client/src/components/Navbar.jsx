import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="glass-panel" style={{
            position: 'sticky',
            top: '20px',
            zIndex: 100,
            margin: '20px',
            padding: '1rem 2rem'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>

                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent)' }}>
                    <ChefHat size={32} />
                    <span style={{ color: 'var(--text-primary)' }}>Smart<span style={{ color: 'var(--accent)' }}>Recipe</span></span>
                </Link>


                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
                    <Link to="/" style={{ fontWeight: '500', transition: 'color 0.2s', padding: '0.5rem 1rem' }}>Explore</Link>
                    <Link to="/saved" style={{ fontWeight: '500', transition: 'color 0.2s', padding: '0.5rem 1rem' }}>Saved</Link>
                    <Link to="/about" style={{ fontWeight: '500', transition: 'color 0.2s', padding: '0.5rem 1rem' }}>About</Link>
                </div>


                <div className="mobile-menu-btn" style={{ display: 'none' }}>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', color: 'var(--text-primary)' }}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: 'hidden', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    >
                        <Link to="/" onClick={() => setIsOpen(false)} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>Explore</Link>
                        <Link to="/saved" onClick={() => setIsOpen(false)} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>Saved</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>About</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
