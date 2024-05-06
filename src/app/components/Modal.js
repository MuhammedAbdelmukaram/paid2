import React from 'react';
import Image from 'next/image';
import styles from './Modal.module.css'; // Ensure you have this CSS file with appropriate styles

const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    // Function to handle the click on the overlay
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className={styles.closeButton}>×</button>
                {content}
            </div>
        </div>
    );
};

export default Modal;
