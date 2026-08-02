// =========================================================
// Import React
// =========================================================

import React from "react";

// =========================================================
// Login Modal Component
// =========================================================

const LoginModal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div>
            <h2>Login Modal</h2>

            <button onClick={onClose}>
                Close
            </button>
        </div>
    );
};

// =========================================================
// Export Component
// =========================================================

export default LoginModal;