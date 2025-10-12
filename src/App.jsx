import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from './components/Greeting';
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import TaskList from "./components/TaskList";
import Input from "./components/Input";



function App() {
  return (
    <div>
      <Header />


      <Greeting />
      <WelcomeMessage />
      <UserProfile />
      <TaskList />
      <h2>Formulario de prueba</h2>
      <Input type="text" placeholder="Escribe tu nombre"/>
      <Input type="email" placeholder="Correo de email"/>


      <Footer />
   </div>
  );
}

export default App;
