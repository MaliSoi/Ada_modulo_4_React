import { useState } from 'react';

function TaskList() {
    const [ tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        setTasks([...tasks, newTask]);
        setNewTask(''); //limpia el input después de agregar
    };

    return (
        <div>
            <input type="text"
            placeholder='Nueva tarea'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Agregar tarea</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;