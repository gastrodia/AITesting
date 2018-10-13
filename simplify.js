var algebra = require('algebra.js');
var exp = new algebra.parse("(((x + x) - (x + x)) + (y + (x + z)))");
exp = exp.simplify();
console.log(exp.toString());