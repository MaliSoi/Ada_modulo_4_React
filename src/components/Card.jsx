import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ tipo, children }) => {
  const [destacado, setDestacado] = useState(false);

  const toggleDestacado = () => setDestacado(prev => !prev);

  // construir clases de forma segura y sin espacios extras
  const classes = [styles.card, tipo && styles[tipo], destacado && styles.destacado]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={toggleDestacado}>
      {children}
    </div>
  );
};

export default Card;
