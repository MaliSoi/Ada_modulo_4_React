import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from './components/Greeting';
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import TaskList from "./components/TaskList";



function App() {
  return (
    <div>
      <Header />


      <Greeting />
      <WelcomeMessage />
      <UserProfile />
      <TaskList />


      <Footer />
   </div>
  );
}

export default App;
