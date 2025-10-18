import React from "react";
import LoginStatus from "./components/LoginStatus";
import Notifications from "./components/Notifications";


function App () {
  const user = {
    name:"Malala",
    isLoggedIn: true, //pruebo despues cambiar a false
  };

   return (
    <div>
   <h2>Ejercicio 1 - if/else</h2>
   <LoginStatus name={user.name} isLoggedIn={user.isLoggedIn}/>
   
   
   <h2>Ejercicio 2 - null</h2>
   <Notifications count={0}/> 
   
   
   </div>
  );
}

export default App;
