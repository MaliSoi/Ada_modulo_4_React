function Tarea ({tarea, onEliminar}) {
    return (
        <li>
            {tarea.texto}
            <button onClick={() => onEliminar(tarea.id)}>Eliminar Tarea</button>
        </li>
    );
}

export default Tarea;
