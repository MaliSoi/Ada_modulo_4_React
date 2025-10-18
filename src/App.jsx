import React from "react";
import LoginStatus from "./components/LoginStatus";







function App () {
  const user = {
    name:"Malala",
    isLoggedIn: true, //pruebo despues cambiar a false
  };

   return (
    <div>
   <h1>Ejercicio 1 - if/else</h1>
   <LoginStatus name={user.name} isLoggedIn={user.isLoggedIn}/>
   </div>
  );
}

export default App;
