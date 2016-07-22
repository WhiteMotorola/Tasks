let Week = require('../models/week.js');

function WeekViewModel() {
    this.week = new Week();
}

WeekViewModel.prototype.createDefaultWeek = function() {
    this.week.addDay('Sun');
    this.week.addDay('Mon');
    this.week.addDay('Tue');
    this.week.addDay('Wed');
    this.week.addDay('Thu');
    this.week.addDay('Fri');
    this.week.addDay('Sat');

    this.week.addTask(1, '18:00', 'Courses!');
    this.week.addTask(2, '10:00', 'Do courses hw.')
    this.week.addTask(3, '18:00', 'Courses!');
    this.week.addTask(5, '18:00', 'Courses!');
    this.week.addTask(5, '22:00', 'Buy ticket on train.');
}
WeekViewModel.prototype.getWeek = function() {
    return this.week;
}
module.exports = WeekViewModel;
