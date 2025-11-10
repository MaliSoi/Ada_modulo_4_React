import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import ItemList from "./components/ItemList";
import Tarjeta from "./components/Tarjeta";
import CardProducto from "./components/CardProducto";





function App() {
  const lista = [
        {nombre:"Item 1", tipo:"success"},
        {nombre:"Item 2", tipo:"error"},
        {nombre:"Item 3", tipo:"warning"},
        {nombre:"Item 4"}, 
      ];


  return (
    <div style={{padding:"20px"}}>
      <h2>Actividad 1</h2>
      <Button tipo="error">Error</Button> 
      <Button tipo="success">Success</Button> 

      
      <h2>Actividad 2</h2>
      <Card>Card Normal</Card>
      <Card tipo="alert">Card tipo alert</Card>
      <Card tipo="success"> Card tipo success</Card> 
      <Card tipo= "alert">Card alert que se puede destacadr al hacer clic</Card>   

      <h2>Actividad 3</h2>
      {/*Renderizamos el componente ItemList pasándole el array*/}
      <ItemList items={lista}/>

      <h2>Actividad 4- Tarjeta con estilos en línea</h2>
      <Tarjeta 
        titulo="Mi primera tarjeta" 
        contenido="Este es el contenido de la tarjeta, usando props para mostrar texto dinámico."
      />

      <Tarjeta 
        titulo="Otra tarjeta" 
        contenido="Podemos reutilizar el mismo componente y mostrar distinto contenido."
      />  

      <h2>Actividad 4</h2>
      <Button variant="primary">Botón Primary por defecto</Button>
      <Button variant="secondary">Botón Secondary</Button>
      
       <h2>Actividad 5 - Card de productos</h2>

       <CardProducto titulo="Producto 1" />
       <CardProducto titulo="Producto 2" />

       </div>
  );
}

export default App;
