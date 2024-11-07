export default function AddButton({task, dispatch, type, payload}) {
    return (
        <button onClick={() => dispatch({ type: "add_task", payload: {type: type, payload: payload}})}
        >{task}</button>
    )
}