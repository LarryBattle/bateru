// Qunit test for sigfig.js
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