import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Prosjekter</h1>
            <p className="text-default-500 mb-8">Ekstra prosjekter utenfor studieplanens emner.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="bg-[#93aee8] dark:bg-gradient-to-br dark:from-[#3461D1] dark:to-[#5B7FE0] p-[1px] rounded-lg shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_18px_rgba(52,97,209,0.5)]"
                >
                <div className="bg-content1 rounded-lg p-6 flex flex-col gap-4 h-full">
                    <div>
                        <h2 className="text-xl font-semibold text-foreground mb-2">Landlosen</h2>
                        <p className="text-default-500 text-sm">
                            Prosjekt utviklet som del av en praksisprosess. Landlosen er en webapplikasjon
                            laget for å demonstrere ferdigheter innen moderne webutvikling.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        <a
                            href="https://landlosen.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            Live preview
                        </a>
                        <a
                            href="https://github.com/Scandiking/Landlosen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-default-300 text-foreground text-sm font-medium hover:bg-content2 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                    className="bg-[#93aee8] dark:bg-gradient-to-br dark:from-[#3461D1] dark:to-[#5B7FE0] p-[1px] rounded-lg shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_18px_rgba(52,97,209,0.5)]"
                >
                <div className="bg-content1 rounded-lg p-6 flex flex-col gap-4 h-full">
                    <div>
                        <h2 className="text-xl font-semibold text-foreground mb-2">PKDEX</h2>
                        <p className="text-default-500 text-sm">
                            En Pokémon-database bygget som en enkeltsideapplikasjon med data fra PokéAPI.
                            Lar brukeren bla gjennom og filtrere Pokémon. Ikke tilknyttet Nintendo eller Game Freak.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        <a
                            href="https://pkdex-omega.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            Live preview
                        </a>
                        <a
                            href="https://github.com/Scandiking/Pokedex"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-default-300 text-foreground text-sm font-medium hover:bg-content2 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
                    className="bg-[#93aee8] dark:bg-gradient-to-br dark:from-[#3461D1] dark:to-[#5B7FE0] p-[1px] rounded-lg shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_18px_rgba(52,97,209,0.5)]"
                >
                <div className="bg-content1 rounded-lg p-6 flex flex-col gap-4 h-full">
                    <div>
                        <h2 className="text-xl font-semibold text-foreground mb-2">Vekteren</h2>
                        <p className="text-default-500 text-sm">
                            En webapplikasjon utviklet som et personlig prosjekt.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        <a
                            href="https://vekteren.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            Live preview
                        </a>
                        <a
                            href="https://github.com/Scandiking/Vekteren"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-default-300 text-foreground text-sm font-medium hover:bg-content2 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
                </motion.div>

            </div>
        </div>
    );
}

export default Projects;
