let Task = require('./task');

function Day(name) {
    this.day = name;
    this.tasks = [];
}

Day.prototype.addTask = function(time, description) {
    let task = new Task(time, description);
    this.tasks.push(task);
}

Day.prototype.getDay = function() {
    return this.day;
}

module.exports = Day;
