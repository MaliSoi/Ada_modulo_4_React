import React from "react";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        const itemClasses = [styles.item, item.tipo && styles[item.tipo]]
          .filter(Boolean)
          .join(" "); // importante el espacio

        return (
          <div key={index} className={itemClasses}>
            {item.nombre}
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;