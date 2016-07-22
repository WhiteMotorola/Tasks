window.onload = function () {

    var Autocomplete = require('../model/autocomplete.js');

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
