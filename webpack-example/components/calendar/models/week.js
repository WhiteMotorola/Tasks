let Day = require('./day');

function Week () {
    this.days = [];
}

Week.prototype.addDay = function(name) {
    let day = new Day(name);
    this.days.push(day);
}
Week.prototype.addTask = function(day, time, description) {
    this.days[day].addTask(time, description);
}

module.exports = Week;
