export default function Input({ state, setState }) {
    return (
        <input 
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}/>
    )
}