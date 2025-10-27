
import Padre from "./Padre";
import PadreContador from "./PadreContador";
import PadreTareas from "./PadreTareas";


function App() {
  return (
    <div>
      <h2>Actividad: Mensaje compartido</h2>
      <Padre />
      <h2>Actividad 2: Contador</h2>
      <PadreContador/>
      <h2>Actividad 3: Lista de Tareas</h2>
      <PadreTareas />

      
    </div>
  );
}

export default App;
