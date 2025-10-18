import React from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import ColorToggle from "./components/ColorToggle";


function App () {
  return (
    <div>
    <h1>Ejercicios Clase 5.1</h1> 

    <h2>Ejercicio 1 : Contador +  - </h2>
    <Counter/>

    <h2>Ejercicio 2: Form </h2>
    <Form/>

    <h2>Ejercicio 3: Lista de Tareas</h2>
    <TaskList/>

    <h2>Ejercicio 4: colorToggle</h2>
    <ColorToggle/>


   </div>
  );
}

export default App;
