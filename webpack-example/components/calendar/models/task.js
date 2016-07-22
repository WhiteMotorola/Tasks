function Task(time, description) {
    this.time = time;
    this.description = description;
}

Task.prototype.getDescription = function() {
    return this.description;
}
Task.prototype.getTime = function() {
    return this.time;
}

module.exports = Task;
