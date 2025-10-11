//src/components/TaskList.jsx
import React from "react";

function TaskList(){
    const tasks = [
        "Complete React exercises",
        "Revise Javascript concepts",
        "Update portfolio",
        "Update Linkedin profile"
    ];

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li> //Cada item necesita una key única
            ))}
        </ul>
    );
}

export default TaskList;