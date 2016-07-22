require('../styles/week.css');
let DayView = require('./day-view');

function WeekView(context) {

    let week = createWeek(context);
    let days = week.find('.days li');

    for (let i = 0; i < days.length; i++) {
        $(days[i]).append(new DayView(context.days[i]));
    }

    function createWeek(context) {
        let week = $(`
            <div class = "week-container">
                <ul class = "days"></ul>
            </div>
        `);

        for (let i = 0; i < context.days.length; i++) {
            week.find('.days').append('<li>' + context.days[i].getDay() + '</li>')
        }

        return week;
    }

    return week;
}

module.exports = WeekView;
