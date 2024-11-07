export default function Input({ state, setTask }) {
    return (
        <input 
        type="text"
        value={state}
        onChange={(e) => setTask(e.target.value)}/>
    )
}