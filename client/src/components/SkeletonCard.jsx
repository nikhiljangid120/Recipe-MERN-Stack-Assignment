import React from 'react';
import { motion } from 'framer-motion';

const SkeletonCard = () => {
    return (
        <div className="glass-panel" style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Image Placeholder */}
            <div style={{ height: '200px', background: 'rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '50%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    }}
                />
            </div>

            {/* Content Placeholder */}
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Title Line */}
                <div style={{ height: '28px', width: '80%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: '50%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                        }}
                    />
                </div>

                {/* Subtitle / Meta Line */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ height: '16px', width: '30%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
                    <div style={{ height: '16px', width: '30%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
                </div>

                {/* Tags Line */}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                    <div style={{ height: '24px', width: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }} />
                    <div style={{ height: '24px', width: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }} />
                </div>

                {/* Button Placeholder */}
                <div style={{ height: '40px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', marginTop: '1rem' }} />
            </div>
        </div>
    );
};

export default SkeletonCard;