import DeleteButton from "./DeleteButton";

function List({ tasks, dispatch}) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task.task}
                    {'  '}
                    <DeleteButton task={task} dispatch={dispatch}/>
                </li>
            ))}
        </ul>
    );
}

export default List;