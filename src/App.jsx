import React from "react";
import LoginStatus from "./components/LoginStatus";
import Notifications from "./components/Notifications";
import LoadingStatus from "./components/LoadingStatus";
import Messages from "./components/Messages";


function App () {
  const user = {
    name:"Malala",
    isLoggedIn: true, //pruebo despues cambiar a false
};

//simulación de estado de carga de datos
const data = true; //cambio a false para ver "Loading..."

const hasMessages = true; //probar con false

   return (
    <div>
   <h2>Ejercicio 1 - if/else</h2>
   <LoginStatus name={user.name} isLoggedIn={user.isLoggedIn}/>
   
   
   <h2>Ejercicio 2 - null</h2>
   <Notifications count={0}/> 

   <h2>Ejercicio 3 - Carga de datos</h2>
   <LoadingStatus isLoading={!data}/>

   <h2>Ejercicio 4 - hay mensajes con &&</h2>
   <Messages hasMessages={hasMessages}/>
   
   
   </div>
  );
}

export default App;
