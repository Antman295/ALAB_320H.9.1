export default function DeleteButton({task, dispatch}) {
    return (
        <button onClick={() => dispatch({ type: "remove_task", payload: task.task})}
        >Delete</button>
    )
}