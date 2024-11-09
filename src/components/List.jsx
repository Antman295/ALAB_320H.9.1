function List({ tasks = []}) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task.task}
                </li>
            ))}
        </ul>
    );
}

export default List;