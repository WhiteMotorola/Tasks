function Node(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
}
function List() {
    this.begin = null;
    this.end = null;
    this.length = 0;
}
List.prototype.isEmpty = function() {
    return this.length == 0;
}
List.prototype.head = function() {
    if (this.isEmpty()) {
	return null;
    }
    else {
	return this.begin.data;
    }
}
List.prototype.tail = function() {
    if (this.isEmpty()) {
	return null;
    }
    else {
	return this.end.data;
    }
}
List.prototype.append = function(data) {
    var tmp = new Node(data, this.end, null);
    if (this.end) {
	this.end.next = tmp;
    }
    else {
	this.begin = tmp;
    }
    this.end = tmp;
    this.length++;
    return this;
}
List.prototype.insertBegin = function(data) {
    var tmp = new Node(data, null, this.begin);
    if(this.begin) {
	this.begin.prev = tmp;
    }
    else {
	this.end = tmp;
    }
    this.begin = tmp;
    this.length++;
    return this;
}
List.prototype.at = function(index) {
    if (index < 0 || index >= this.length) {
	console.log("Wrong index!");
	return;
    } else {
	var curr = this.begin;
	for (var i = 0; i < index; i++) {
    	    curr = curr.next;
	}
	return curr.data;
    }
}
List.prototype.insertAt = function(index, data) {
    if (index < 0 || index > this.length) {
        console.log("Wrong index!");
        return this;
    }
    if (index == this.length) {
	return this.append(data);
    }
    if (index == 0) {
	return this.insertBegin(data);
    }
    var curr = this.begin;
    for (var i = 0; i < index; i++) {
	curr = curr.next;
    }
    var tmp = new Node(data, curr.prev, curr);
    tmp.prev.next = tmp;
    tmp.next.prev = tmp;
    this.length++;
    return this;
}
List.prototype.deleteFromBegin = function(index) {
    if (this.begin) {
        var tmp = this.begin;
	if (this.begin.next) {
	    this.begin.next.prev = null;
	}
	else {
	    this.end = null;
	}
	this.begin = this.begin.next;
	this.length--;
	return this;
    }
}
List.prototype.deleteFromEnd = function(index) {
    if (this.end) {
	var tmp = this.end;
	if (this.end.prev) {
            this.end.prev.next = null;
	}
	else {
	    this.begin = null;
	}
	this.end = this.end.prev;
  	this.length--;
  	return this;
    }
}
List.prototype.deleteAt = function(index) {
    if (index < 0 || index >= this.length) {
        console.log("Wrong index!");
	return this;
    }
    if (index == 0) {
	return this.deleteFromBegin();
    }
    if (index == this.length - 1) {
	return this.deleteFromEnd();
    }
    var curr = this.begin;
    for (var i = 0; i < index; i++) {
        curr = curr.next;
    }
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
    this.length--;
    return this;
}
List.prototype.reverse = function() {
    if (this.length == 0 || this.length == 1) {
    	return this;
    }
    var curr = this.begin;
    this.begin = this.end;
    this.end = curr;
    for (var i = 0; i < this.length; i++) {
        var tmp = curr.prev;
	curr.prev = curr.next;
	curr.next = tmp;
	curr = curr.prev;
    }
    return this;
}
List.prototype.each = function(func) {
    var curr = this.begin;
    for (var i = 0; i < this.length; i++) {
        curr.data = func(curr.data);
	curr = curr.next;
    }
    return this;
}
List.prototype.indexOf = function(data) {
    var curr = this.begin;
    var count = 0;
    for (var i = 0; i < this.length; i++) {
	if (curr.data == data) {
	    return count;
	}
	curr = curr.next;
	count++;
    }
    return -1;
}
//to be easy to test
List.prototype.toString = function() {
    var curr = this.begin;
    var str = '';
    for (var i = 0; i < this.length; i++) {
        str += curr.data.toString();
	curr = curr.next;
    }
    return str;
}
