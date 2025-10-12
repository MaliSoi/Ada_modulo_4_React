import React from "react";

export default function Button ({label, disabled, variant = "primary"}) {
//Elegimos el color según el variant
let backgroundColor;
switch (variant) {
    case "secondary":
        backgroundColor = "#6c757d";
        break;
        case "danger":
            backgroundColor = "#dc3545";
        break;
        default:
            backgroundColor = "#007bff";
}

//si está deshabilitado, se vuelve gris
if (disabled) backgroundColor = "#ccc";

return (
    <button 
    disabled = {disabled}
    style={{
        backgroundColor,
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "4px",
        margin: "6px 0",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {label}
    </button>
  );
}