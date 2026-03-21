import React from 'react';
import { motion } from 'framer-motion';

function AnimatedPage({ children, className }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedPage;
