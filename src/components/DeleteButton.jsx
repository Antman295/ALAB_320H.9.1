export default function DeleteButton({task, dispatch, disabled}) {
    return (
        <button onClick={() => dispatch({ type: "remove_task", payload: task.task})}
        disabled={disabled}
        >Delete</button>
    )
}