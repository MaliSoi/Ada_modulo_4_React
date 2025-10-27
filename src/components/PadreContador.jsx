import { useState} from "react";
import BotonSumar from "./BotonSumar";
import BotonRestar from "./BotonRestar";
import MostrarContador from "./MostrarContador";

function PadreContador() {
    const [contador, setContador] = useState(0);

    return(
        <div>
            <h2>Contador compartido</h2>
            <MostrarContador constador={contador}/>
            <BotonSumar setContador={setContador}/>
            <BotonRestar setContador={setContador}/>
        </div>
    );
}

export default PadreContador;