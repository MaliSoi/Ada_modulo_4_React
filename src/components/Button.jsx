import React from "react";
import styles from "./Button.module.css";

const Button = ({ tipo, children }) => {
    return (
        <button className={`${styles.btn} ${styles[tipo]}`}>{children}
        </button>
    );
};

export default Button;

