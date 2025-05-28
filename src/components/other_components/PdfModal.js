import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './PdfModal.css';

// Set worker src (adjust the version if needed)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfModal = ({ isOpen, onClose, file }) => {
  if (!isOpen) return null;

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>

      <div className="pdf-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>

        <Document
          file={file}
          onLoadError={error => console.error('Error loading PDF:', error.message)}
        >
          <Page pageNumber={1} />
        </Document>
      </div>

    </div>
  );
};

export default PdfModal;