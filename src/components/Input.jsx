import React from "react";

export default function Input ({placeholder, type}) {
    return (
        <input
        type={type}
        placeholder={placeholder}
        class name ="border rounded px-2 py-1"
        />
    )
  }


      