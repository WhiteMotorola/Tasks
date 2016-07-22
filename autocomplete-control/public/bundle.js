/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	window.onload = function () {
	
	    var Autocomplete = __webpack_require__(1);
	
	    var container = ['foo', 'bar', 'baz', 'hello', 'by', 'wut', 'hell', 'he'];
	
	    var ac = new Autocomplete();
	
	    var input = document.querySelector('#tags');
	    var listOFFound = document.querySelector('.complete-strings');
	
	    input.addEventListener('input', function (e) {
	        listOFFound.innerHTML = '';
	        console.log(listOFFound);
	        ac.addValue(input.value);
	        console.log(ac.string);
	        var completeStrings = ac.checkString(container);
	        for (var i = 0; i < completeStrings.length; i++) {
	            var newLi = document.createElement('li');
	            newLi.innerHTML = completeStrings[i];
	            console.log(completeStrings[i]);
	            document.querySelector('.complete-strings').appendChild(newLi);
	        }
	    });
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Autocomplete () {
	  this.string = '';
	}
	
	Autocomplete.prototype.addValue = function (str) {
	  var tmp = str.split(" ");
	  this.string = tmp[tmp.length - 1];
	}
	Autocomplete.prototype.checkString = function (arr) {
	  var a = arr.filter((str) => {
	    if (this.string === "") {
	      return "";
	    }
	    if (this.string === str.substring(0, this.string.length)) {
	      return str;
	    }
	  });
	  return a;
	}
	
	module.exports = Autocomplete;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map