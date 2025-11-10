import React from "react";

const Tarjeta = () => {
    //EStulos del contenedor

    const contenedorStyle = {
    border: "1px solid #ccc",
    padding: "16px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    maxWidth: "300px",
    margin: "10px auto"
  };

  //Estilos del titulo
  const tituloStyle = {
    color: "blue",
    fontSize: "24px",
    margin: "0 0 10px 0"
  };

  //Estilos del párrafo
  const parrafoStyle = {
    color: "#333",
    fontSize: "16px",
    margin: 0
  };

  return (
    <div style={contenedorStyle}>
        <h2 style={tituloStyle}>Titulo de la tarjeta</h2>
        <p style={parrafoStyle}>Este es un párrafo dentro de la tarjeta con estilos aplicados en línea</p>

    </div>
  );
  };


  export default Tarjeta;