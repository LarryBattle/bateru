// From: http://bateru.com/news/2011/04/code-of-the-day-javascript-significant-figures/

/**
* Returns the significant digits in a number.
* @param {String|Number} num - must be a number (base 10) that is a string. example "01"
* @license MIT
* @date April 16, 2013
*/
var getSigFigFromNum = function (num) {
	if (isNaN(+num) || !isFinite(+num)) {
		return 0;
	}
	// re is a RegExp to get the numbers from first non-zero to last non-zero
	var re = /[^0](\d*[^0])?/,
		re2 = /^[0+\-]+/,
		re3 = /[eE][+\-]?\d+/;
	//
	num = String(num).replace(re2, '').replace(re3, '');
	return (/\./.test(num)) ? num.length - 1 : (num.match(re) || [''])[0].length;
};
var fn = getSigFigFromNum;

test("Positive Numbers whole nubmers", function(){
	equal(fn(0), 0);
	equal(fn(1), 1);
	equal(fn(10), 1);
	
	equal(fn(1000), 1);
	equal(fn("1000.0"), 5);
	equal(fn(123456789), 9);
	
	equal(fn(1.001), 4);
	equal(fn("1.00000100"), 9);
	equal(fn(1e10), 1);
	
	equal(fn(1e-40), 1);
	equal(fn(1.0001e-40), 5);
});
test("Negative Numbers", function(){
	equal(fn(-1), 1);
	equal(fn(-10), 1);
	equal(fn(-1000), 1);
	
	equal(fn("-1000.0"), 5);
	equal(fn(-123456789), 9);
	equal(fn(-1.001), 4);
	
	equal(fn("-1.00000100"), 9);
	equal(fn(-1e10), 1);
	equal(fn(-1e-40), 1);
	
	equal(fn(-1.0001e-40), 5);
});
test("Not numbers", function(){
	equal(fn(), 0);
	equal(fn(NaN), 0);
	equal(fn("apple"), 0);
});