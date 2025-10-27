import Tarea from "./Tarea";

function ListaTareas({ tareas, eliminarTarea}) {
    return (
        <ul>
            {tareas.map (t => (
                <Tarea key={t.id} tarea={t} onEliminar={eliminarTarea} />
            ))}
        </ul>
    );
}

export default ListaTareas;
