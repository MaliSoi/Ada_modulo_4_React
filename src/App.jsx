import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from './components/Greeting';
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import TaskList from "./components/TaskList";
import Input from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Card";
import LoginForm from "./components/Login";



function App() {
  return (
    <div>
      <Header />


      <Greeting />
      <WelcomeMessage />
      <UserProfile />
      <TaskList />
      <h2>Ejercicio 1- Input</h2>
      <Input type="text" placeholder="Escribe tu nombre"/>
      <Input type="email" placeholder="Correo de email"/>
      
      <h2>Ejercicio 2 - Button</h2>
      <Button label="Enviar" disabled={false}/>
      <Button label="Deshabilitado" disabled={true}/>
      
      
        <h2>Ejercicio 3 - Card</h2>
        <Card>
        <h3>Titulo de la tarjeta</h3>
        <p>Este es un contenido dentro de la tarjeta.</p>
        <Button label="Aceptar" disabled={false}/>
      </Card>
      <Card>
        <h3>Titulo de la tarjeta</h3>
         <p>Otra tarjeta con contenido diferente.</p>
        <Button label="Cancelar" disabled={true}/>
      </Card>

      <h2>Ejercicio 4 - LoginForm</h2>
      <LoginForm/>


      <Footer />
   </div>
  );
}

export default App;
