var colors = require('colors');
var _console = clone(console);


console.error= function() {
  var args = Array.prototype.slice.call(arguments, 0);
  args[0] = args[0].red;
  _console.error.apply(null, args);
}

console.warn= function() {
  var args = Array.prototype.slice.call(arguments, 0);
  args[0] = args[0].yellow;
  _console.warn.apply(null, args);
}

console.info= function() {
  var args = Array.prototype.slice.call(arguments, 0);
  args[0] = args[0].blue;
  _console.info.apply(null, args);
}

console.success= function(str) {
  _console.log(str.green);
}

console.rainbow= function(str) {
  _console.log(str.rainbow);
}

function clone(target) {
  var newObj = (target instanceof Array) ? [] : {},
      i;

  for (i in target) {
    if (i == 'clone') continue;
    if (target[i] && typeof target[i] == "object") {
      newObj[i] = clone(target[i]);
    }
    else {
      newObj[i] = target[i];
    }
  }
  return newObj;
};
