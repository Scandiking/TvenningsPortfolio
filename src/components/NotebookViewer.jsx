import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import CodeBlock from './CodeBlock';
import 'katex/dist/katex.min.css';

const CellOutput = ({ output }) => {
    if (output.output_type === 'stream') {
        const text = Array.isArray(output.text) ? output.text.join('') : output.text;
        return <pre className="text-xs text-default-500 bg-content2 p-2 rounded whitespace-pre-wrap">{text}</pre>;
    }

    const data = output.data || {};

    if (data['image/png']) {
        return (
            <img
                src={`data:image/png;base64,${data['image/png']}`}
                alt="notebook output"
                className="max-w-full"
            />
        );
    }

    if (data['text/html']) {
        const html = Array.isArray(data['text/html']) ? data['text/html'].join('') : data['text/html'];
        return <div dangerouslySetInnerHTML={{ __html: html }} className="text-sm overflow-auto" />;
    }

    if (data['text/plain']) {
        const text = Array.isArray(data['text/plain']) ? data['text/plain'].join('') : data['text/plain'];
        return <pre className="text-xs text-default-500 bg-content2 p-2 rounded whitespace-pre-wrap">{text}</pre>;
    }

    return null;
};

const mdComponents = {
    h1: ({ children }) => <h1 className="text-2xl font-bold mt-4 mb-2">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-semibold mt-3 mb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-semibold mt-2 mb-1">{children}</h3>,
    p:  ({ children }) => <p className="mb-2 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-5 mb-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-5 mb-2">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    code: ({ children, className }) => {
        if (!className) return <code className="bg-content2 px-1 rounded text-sm font-mono">{children}</code>;
        return <code>{children}</code>;
    },
};

const NotebookViewer = ({ ipynb }) => {
    if (!ipynb) return null;

    return (
        <div className="flex flex-col gap-4 text-foreground">
            {ipynb.cells.map((cell, i) => {
                const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source;

                if (cell.cell_type === 'markdown') {
                    return (
                        <div key={i}>
                            <ReactMarkdown
                                remarkPlugins={[remarkMath, remarkGfm]}
                                rehypePlugins={[rehypeKatex]}
                                components={mdComponents}
                            >
                                {source}
                            </ReactMarkdown>
                        </div>
                    );
                }

                if (cell.cell_type === 'code') {
                    return (
                        <div key={i} className="flex flex-col gap-2">
                            {source.trim() && (
                                <CodeBlock code={source} language="python" showLineNumbers />
                            )}
                            {cell.outputs?.map((output, j) => (
                                <div key={j}>
                                    <CellOutput output={output} />
                                </div>
                            ))}
                        </div>
                    );
                }

                return null;
            })}
        </div>
    );
};

export default NotebookViewer;
