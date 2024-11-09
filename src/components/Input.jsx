export default function Input({ task, setTask }) {
    return (
        <input 
        type="text"
        value={task}
        placeholder="Add Task"
        onChange={(e) => setTask(e.target.value)}/>
    )
}