import React from "react";

export default function Button ({label, disabled}) {
    return (
        <button
        disabled={disabled}
        style= {{
            backgroundColor: disabled ? "#ccc" : "#007bff",
            color:"white",
            border: "none",
            padding: "8px 12 px",
            borderRadius: "4px",
            margin: "6px",
            cursor: disabled ? "not-allowed" : "pointer",
        }}
        >
            {label}
        </button>
    );
}