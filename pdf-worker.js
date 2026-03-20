/* Classic-worker wrapper for the ESM pdfjs worker.
   Dynamic import() is supported in classic workers (Firefox 113+, Chrome 80+, Safari 15+)
   and avoids the need for type:"module" which pdfjs doesn't use when creating its Worker. */
import('./pdf.worker.min.mjs');
