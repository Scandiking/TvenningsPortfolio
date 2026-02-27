/**
 * Custom component to handle PDF viewing. Default lacks button for full screen.
 */

import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { useState } from 'react'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export function PDFViewer({ file }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <div>
            <Document
                file={file}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>{pageNumber} of {numPages}</p>
            <button onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}>Prev</button>
            <button onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}>Next</button>
        </div>
    );
}