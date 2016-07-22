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
