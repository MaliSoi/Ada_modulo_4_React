import { useState } from "react";

function AgregarTarea({ setTareas}) {
    const [nuevaTarea, setNuevaTarea] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nuevaTarea.trim()) return; //no agrega vacías
        setTareas(prev => [
            ...prev,
            {id: Date.now(), texto:nuevaTarea}
        ]);
        setNuevaTarea("");
    };

        return(
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Nueva tarea..."
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button type="submit">Agregar Tarea</button>
                </form>
        );
    }

    export default AgregarTarea;
    