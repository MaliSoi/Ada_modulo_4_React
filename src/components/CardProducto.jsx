import React, {useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./CardProducto.module.css";
import productImg from "../assets/images.jpeg";


function CardProducto({ titulo }) {
    const [inCart, setInCart] = useState(false);

    // Declarar buttonClasses **antes del return**
    const buttonClasses = [styles.btn3, inCart ? styles.agregado : styles.agregar]
        .filter(Boolean)
        .join(" ");

    const toggleCart = () => setInCart(prev => !prev);

    return (
        <div className={styles.card}>
            <img src={productImg} alt={titulo} className={styles.imagen} />
            <h3 className={styles.titulo}>{titulo}</h3>
            <button className={buttonClasses} onClick={toggleCart}>
                <FaShoppingCart />
                {inCart ? "Agregado" : "Agregar al carrito"}
            </button>
        </div>
    );
}

export default CardProducto;