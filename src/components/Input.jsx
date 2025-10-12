import React from "react";

export default function Input ({placeholder, type}) {
    return (
        <input
        type={type}
        placeholder={placeholder}
       style={{
        border: "1px solid #ccc",
        borderRadius:"4px",
        padding:"8px",
        margin:"6px",
       }}
        />
    );
  }


      