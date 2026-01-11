// src/components/CodeBlock.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code } from '@heroui/react'; // Juster importen basert på HeroUI's struktur

const CodeBlock = ({ code, language = 'Python', showLineNumbers = true, maxHeight = '500px' }) => {

    const normalizeLanguage = (lang) => {
        const normalized = lang.toLowerCase();
        if (['postgres', 'postgresql', 'pgsql'].includes(normalized)) return 'postgresql';
        if (['mysql'].includes(normalized)) return 'mysql';
        return normalized;
    };

    return (
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                    {language}
                </span>
                <button
                    variant="primary"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    onClick={() => navigator.clipboard.writeText(code)}
                    >
                    Kopier
                </button>
            </div>

            <div style={{ maxHeight }} className="overflow-auto">
                <SyntaxHighlighter
                    language={normalizeLanguage(language)}
                    style={atomDark}
                    showLineNumbers={showLineNumbers}
                    customStyle={{
                        margin: 0,
                        padding: "1rem",
                        fontSize: "0.875rem",
                    }}
                    >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeBlock;
