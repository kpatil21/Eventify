// =========================================================
// Import React
// =========================================================

import React from "react";

// =========================================================
// Register Modal Component
// =========================================================

const RegisterModal = ({ isOpen, onClose }) => {

    // Don't render the modal if it is closed
    if (!isOpen) return null;

    return (
        <div>
            <h2>Register Modal</h2>

            <button onClick={onClose}>
                Close
            </button>
        </div>
    );
};

// =========================================================
// Export Component
// =========================================================

export default RegisterModal;