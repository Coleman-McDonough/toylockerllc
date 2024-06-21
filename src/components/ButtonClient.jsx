// ButtonClient.jsx - This is a Client Component
"use client";
import React from 'react';

const ButtonClient = ({ onClick, className, children }) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default ButtonClient;