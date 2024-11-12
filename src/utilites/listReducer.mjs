let idCounter = 0;

export default function reducer(state, {type, payload}) {

    switch(type) {
        case "add_task" : {
            const {task} = payload;
            if (task  === "") {
                return state;
            }

            let taskExist = false;
            state.forEach((e) => {
                if (e.task === task) {
                    alert( `${task} already exist on the list. Either delete it, change it, or 
                        put in a different one!`);
                    taskExist = true;
                }
            });
            if (taskExist) return state;

            return [{id: idCounter++, task}, ...state];

        }
        case "remove_task" : {
            return state.filter((s) => s.task !== payload);
        }

        case "edit_task" : {
            const {taskId, newTask} = payload;
            return state.map((task) => 
            task.id === taskId ? {...task, task: newTask}: task);
        }
        default:
            return state;
    }
}