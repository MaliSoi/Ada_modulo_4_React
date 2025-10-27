import {useState} from "react";
import InputMensaje from "./InputMensaje";
import MostrarMensaje from "./MostrarMensaje";

function Padre(){
    const [mensaje, setMensaje] = useState("");

    return (
        <div>
            <InputMensaje mensaje={mensaje} setMensaje={setMensaje}/>
            <MostrarMensaje mensaje={mensaje} />
        </div>
    );
}

export default Padre;