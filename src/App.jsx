import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";




function App() {
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
   </div>
  );
}

export default App;
