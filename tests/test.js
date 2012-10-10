var assert = require('assert');

function TEST (name){
	
}

TEST.method = function (text){
	console.log(text);
	return "returned";
}

var retval = TEST.method("OUTPUT");
console.log(retval);
assert.equal(true, true);
