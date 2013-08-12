/**
* Returns whether a `()` are enclosed correctly.
* @param {String} input 
* @return {Boolean}
*/
var doesInputHasMatchingParams = function (input) {
	var x = 0, 
		str = String(input).replace(/[^()]/mg, ""),
		openCount = (str.match(/\(/g) || []).length,
		closeCount = (str.match(/\)/g) || []).length;
	if( openCount !== closeCount ){
		return false;
	}
	
	for (var i = 0, len = str.length; i < len && (-1 < x); i++) {
		switch(str.charAt(i)){
			case "(": x++; break;
			case ")": x--; break;
		}
	}
	return x === 0;
};
