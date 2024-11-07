export default function reducer(state, {type, payload: {task, action}}) {
    switch(type) {
        case "add_task" : {
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
            return [{task: task}, ...state];
        }
    }
}