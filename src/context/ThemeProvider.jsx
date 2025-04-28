import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    // Tema-alternativer: 'light', 'dark', 'system'
    const [theme, setTheme] = useState(() => {
        // Hent lagret tema fra localStorage eller bruk 'system' som standard
        return localStorage.getItem('theme') || 'system';
    });

    // Faktisk tema som brukes
    const [resolvedTheme, setResolvedTheme] = useState('light');

    // Funksjon for å oppdatere tema
    const updateTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Håndter systempreferanse
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = () => {
            if (theme === 'system') {
                setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
            } else {
                setResolvedTheme(theme);
            }
        };

        handleChange(); // Kjør ved oppstart
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    // Oppdater HTML-elementet med riktig klasse
    useEffect(() => {
        if (resolvedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [resolvedTheme]);

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme: updateTheme }}>
            {children}
            </ThemeContext.Provider>
    );
};