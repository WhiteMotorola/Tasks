(function() {

	var CJQBuilder = function(selector) {
    return new CJQuery(selector);
  }

	var CJQuery = function(selector) {
		typeof selector === 'string' ? this.elementsList = document.querySelectorAll(selector) : this.elementsList = selector;
	}

	CJQuery.prototype.each = function(callback) {
    for (var i = 0; i < this.elementsList.length && callback.call(this.elementsList[i], i, this.elementsList[i]) !== false; i++) {}
    return this;
  }

	CJQuery.prototype.addClass = function(classNames) {
		var callback = function(index, element) {
			if (typeof classNames === 'string') {
				var namesArray = classNames.split(' ');
				for (var i = 0; i < namesArray.length; i++) {
					element.classList.add(namesArray[i]);
				}
			}
			if (typeof classNames === 'function') {
				var tmp = classNames(index, element.className);
				if (tmp !== undefined) {
					var namesArray = tmp.split(' ');
					for (var i = 0; i < namesArray.length; i++) {
						element.classList.add(namesArray[i]);
					}
				}
			}
		}
		return this.each(callback);
  }

	CJQuery.prototype.append = function(content) {
		var callback = function (index, element) {
			typeof content === 'string' ? element.innerHTML += content : element.appendChild(document.importNode(content, true));
		}
		return this.each(callback);
	}

	CJQuery.prototype.html = function(htmlString) {
		var callback = function(index, element) {
			element.innerHTML = htmlString;
		}
		return htmlString === undefined ? this.elementsList[0].innerHTML : this.each(callback);
	}

	CJQuery.prototype.attr = function(name, value) {
		var callback = function(index, element) {
			element.setAttribute(name, value);
		}
		return value === undefined ? this.elementsList[0].getAttribute(name) : this.each(callback);
	}

	CJQuery.prototype.children = function(selector) {
		return this.elementsList[0].querySelectorAll(selector);
	}

	CJQuery.prototype.css = function(propertyName) {
		var callback = function(index, element) {
			for (var key in propertyName) {
				element.style[key] = propertyName[key];
			}
		}
		return typeof propertyName === 'string' ? this.elementsList[0].style[propertyName] : this.each(callback);
	}

	CJQuery.prototype.on = function(events, selector, handler) {
		var listener = function(e) {
			if (e.target.classList.contains(selector.replace(/\./, ''))) handler();
		}
		return arguments.length === 2 ? this.elementsList[0].addEventListener(events, selector) : this.elementsList[0].addEventListener(events, listener);
	}

	CJQuery.prototype.one = function(event, handler) {
		var callback = function(index, element) {
			element.addEventListener(event, handler());
		}
		return this.each(callback);
	}

	CJQuery.prototype.data = function(name, value) {
		var callback = function(index, element) {
			if (typeof name === 'object') {
				for (var key in name) {
					element.dataset[key] = name[key];
				}
			}
			if (typeof name === 'string') {
				element.dataset[name] = value;
			}
		}
		if (arguments.length === 0) {
			return this.elementsList[0].dataset;
		}
		if (value === undefined && typeof name === 'string') {
			return this.elementsList[0].dataset[name];
		}
		return this.each(callback);
	}

	window.$ = CJQBuilder;
	
})();
