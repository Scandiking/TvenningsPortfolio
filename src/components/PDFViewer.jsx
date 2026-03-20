import { useState, useRef, useEffect, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf-worker.js`;

export function PDFViewer({ src, title = '' }) {
    const [numPages, setNumPages] = useState(null);
    const [loadError, setLoadError] = useState(null);
    const [width, setWidth]        = useState(null);
    const containerRef = useRef(null);

    const onLoadSuccess = useCallback(({ numPages }) => setNumPages(numPages), []);
    const onLoadError   = useCallback((err) => setLoadError(err?.message || String(err)), []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return (
        <div className="rounded-lg overflow-hidden border border-content3 my-2">

            {/* ── Toolbar ── */}
            <div className="flex items-center justify-between bg-content2 px-3 py-2 border-b border-content3">
                <span className="text-sm text-default-500">
                    {numPages ? `${numPages} sider` : ''}
                </span>
                <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Åpne i nytt vindu"
                    className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M3 4.5A1.5 1.5 0 014.5 3h4.75a.75.75 0 010 1.5H4.5v11h11v-4.75a.75.75 0 011.5 0V15.5A1.5 1.5 0 0115.5 17h-11A1.5 1.5 0 013 15.5v-11z"/>
                        <path d="M11.25 3a.75.75 0 000 1.5h3.19l-5.72 5.72a.75.75 0 101.06 1.06l5.72-5.72v3.19a.75.75 0 001.5 0V3.75A.75.75 0 0016.25 3H11.25z"/>
                    </svg>
                    Fullskjerm
                </a>
            </div>

            {/* ── Scrollable page stack ── */}
            <div
                ref={containerRef}
                className="overflow-y-auto bg-neutral-200 dark:bg-neutral-800"
                style={{ maxHeight: '80vh' }}
            >
                <Document
                    file={src}
                    onLoadSuccess={onLoadSuccess}
                    onLoadError={onLoadError}
                    loading={
                        <div className="p-10 text-default-500 text-sm text-center">Laster PDF…</div>
                    }
                    error={
                        <div className="p-10 text-sm text-center">
                            <p className="text-danger mb-2">Kunne ikke laste PDF-en.</p>
                            {loadError && <p className="text-xs text-default-400 mb-2 font-mono">{loadError}</p>}
                            <a href={src} target="_blank" rel="noopener noreferrer"
                               className="text-primary hover:underline">
                                Åpne i nytt vindu ↗
                            </a>
                        </div>
                    }
                >
                    {numPages && Array.from({ length: numPages }, (_, i) => (
                        <div key={i} className="flex justify-center mb-1">
                            <Page
                                pageNumber={i + 1}
                                width={width ? Math.min(width, 960) : 700}
                                renderTextLayer
                                renderAnnotationLayer
                                loading=""
                            />
                        </div>
                    ))}
                </Document>
            </div>
        </div>
    );
}

export default PDFViewer;
