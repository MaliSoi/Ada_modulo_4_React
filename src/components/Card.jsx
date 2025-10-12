import React from "react";

export default function Card({ children }) {
    return(
        <div
        style = {{
            border: "1px solid #ccc",
            borderRadius: "16px",
            margin:"12px 0",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
            }}
            >
             {children}
            </div>
    );
    }

