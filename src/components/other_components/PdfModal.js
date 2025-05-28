import React from 'react';
import { Document, Page } from 'react-pdf';
import './PdfModal.css';

const PdfModal = ({ isOpen, onClose, file }) => {
  if (!isOpen) return null;

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <Document file={file}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
};

export default PdfModal;