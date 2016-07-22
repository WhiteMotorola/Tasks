require('../styles/day.css');
let TaskView = require('./task-view');

function DayView(context) {

    let day = createDay(context);

    day.append(new TaskView(context.tasks));

    function createDay(context) {
        let day = $(`
            <div class = "day"></div>
        `);

        return day;
    }

    return day;
}

module.exports = DayView;
