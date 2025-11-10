import React from "react";
import styles from "./Button.module.css";

/*const Button = ({ tipo, children }) => {
    return (
        <button className={`${styles.btn} ${styles[tipo]}`}>{children}
        </button>
    );
};*/

const Button = ({variant="primary", children}) => {
    const classes = [ styles.btn2, styles[variant]].filter(Boolean).join(" ");

    return <button className={classes}>{children}</button>
};



export default Button;

