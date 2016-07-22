require('../styles/task.css');

function TaskView(context) {

    let task = createTask(context);

    function createTask(context) {
        let tasks = $(`
            <ul class = 'tasks'></ul>
        `);

        for (let i = 0; i < context.length; i++) {
            tasks.append(`
                <li>
                    <span class = 'time'>` + context[i].getTime() + `</span>
                    <span class = 'description'> - ` + context[i].getDescription() + `</span>
                </li>
            `);
        }

        return tasks;
    }

    return task;
}

module.exports = TaskView;
