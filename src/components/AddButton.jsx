export default function AddButton({task, dispatch}) {
    return (
        <button onClick={() => dispatch({ type: "add_task", payload: {task}})}
        >Add</button>
    )
}