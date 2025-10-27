import { useState } from "react";
import AgregarTarea from "./AgregarTarea";
import ListaTareas from "./ListaTareas";

function PadreTareas(){
    const [tareas, setTareas] = useState([]);

    //función para eliminar tarea id
    const eliminarTarea = (id) => {
        setTareas(prev => prev.filter(t=>t.id !== id));
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <AgregarTarea setTareas={setTareas}/>
            <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea}/>
        </div>
    );
}

export default PadreTareas;