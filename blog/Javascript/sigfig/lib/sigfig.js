// From: http://bateru.com/news/2011/04/code-of-the-day-javascript-significant-figures/

/**
* Returns the significant digits in a number.
* @param {String|Number} num - must be a number (base 10) that is a string. example "01"
* @return {Number} Number of significant digits. If a number is not passed, then returns 0
* @license MIT
* @date April 16, 2013
*/
var getSigFigFromNum = function (num) {
	if (isNaN(+num) || !isFinite(+num)) {
		return 0;
	}
		// re is a RegExp to get the numbers from first non-zero to last non-zero
	var re = /[^0](\d*[^0])?/,
		// finds leading zeros
		re2 = /^[0+\-]+/,
		// Finds the last part for scientific notated values
		re3 = /[eE][+\-]?\d+/; 
	
	num = String(num).replace(re2, '').replace(re3, '');
	return (/\./.test(num)) ? num.length - 1 : (num.match(re) || [''])[0].length;
};
