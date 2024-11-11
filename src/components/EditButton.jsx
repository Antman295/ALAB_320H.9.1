export default function EditButton({task, dispatch}) {
    return (
        <button onClick={() => dispatch({ type: "edit_task", payload: {task: task, newTask: "Updated Task"}})}
        >Edit</button>
    )
}