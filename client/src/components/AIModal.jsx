import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Loader } from 'lucide-react';

const AIModal = ({ isOpen, onClose, title, content, isLoading }) => {

    // Helper to clean Markdown bold syntax for a cleaner look
    const cleanText = (text) => {
        if (!text) return "";
        // Remove ** bold markers and * italics markers for cleaner plain text
        return text.replace(/\*\*/g, '').replace(/\*/g, '');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        backdropFilter: 'blur(5px)'
                    }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        onClick={e => e.stopPropagation()}
                        className="glass-panel"
                        style={{
                            width: '90%',
                            maxWidth: '600px',
                            maxHeight: '80vh',
                            overflowY: 'auto',
                            padding: '2rem',
                            border: '1px solid var(--accent)',
                            background: 'var(--bg-secondary)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', color: 'var(--accent)', margin: 0 }}>
                                <Sparkles /> {title}
                            </h2>
                            <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '5px' }}>
                                <X size={24} />
                            </button>
                        </div>

                        {isLoading ? (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem' }}>
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                                    <Loader size={40} color="var(--accent)" />
                                </motion.div>
                                <p style={{ color: 'var(--text-secondary)' }}>Consulting with AI Chef...</p>
                            </div>
                        ) : (
                            <div style={{ lineHeight: '1.8', fontSize: '1.1rem', whiteSpace: 'pre-wrap', color: 'var(--text-primary)' }}>
                                {cleanText(content)}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AIModal;
