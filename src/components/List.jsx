import { useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function List({ tasks, dispatch}) {

    const [newTask, setNewTask] = useState("");

    const handleChange = (task) => {
        setNewTask(task.task);
    }

    const handleSave = (task) => {
        dispatch({ type: "edit_task", payload: {task, newTask}});
        setNewTask(null);
    }


    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {setNewTask === task.task ? (
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