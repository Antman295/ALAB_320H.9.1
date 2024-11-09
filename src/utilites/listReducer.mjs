export default function reducer(state, {type, payload}) {
    console.log("Reducer received payload:", payload); // Log the payload here

    switch(type) {
        case "add_task" : {
            const {task} = payload;
            console.log("Task to add:", task); // Log task to check if it's correct

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
        case "remove_task" : {
            return state.filter((s) => s.task !== task);
        }

        default:
            return state;
    }
}