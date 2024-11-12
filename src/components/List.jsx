import { useState } from "react";
import DeleteButton from "./DeleteButton";

function List({ tasks, dispatch}) {

    const [editTaskId, setEditTaskId] = useState(null);
    const [newTask, setNewTask] = useState("");

    const handleChange = (task) => {
        setEditTaskId(task.id);
        setNewTask(task.task);
    }

    const handleSave = (taskId) => {
        dispatch({ type: "edit_task", payload: {taskId, newTask}});
        setEditTaskId(null);
        setNewTask("");
    }

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {editTaskId === task.id ? (
                        <>
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            />
                            <button onClick={() => handleSave(task.id)}>Save</button>
                            </>
                            ):(
                            <>
                    {task.task}
                    {' | '}
                    
                    <DeleteButton task={task} dispatch={dispatch}/>
                    {' '}
                    <button onClick={() => handleChange(task)}>Edit</button>
                    </>
                    )}
                </li>
                
            ))}
        </ul>
    );
}

export default List;