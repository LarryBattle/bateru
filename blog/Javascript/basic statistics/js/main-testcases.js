test("test isArray()", function(){
	var fn = isArray;
	equal( fn([]), true );
	equal( fn([1]), true );
	equal( fn([1,2]), true );
	
	equal( fn(1), false );
	equal( fn({}), false );
	equal( fn("&&"), false );
});
test("test getNumWithSetDec()", function(){
	var fn = getNumWithSetDec;
	equal(fn(2.3), 2.3);
	equal(fn(2.1234, 3), 2.123);
});
test("test getAverageFromNumArr()", function(){
	var fn = getAverageFromNumArr;
	equal( fn([]).toString(), "NaN" );
	equal( fn([1]), 1 );
	equal( fn([1,2]), 1.5 );
	equal( fn([1,2,3,4,5]), 3 );
	equal( fn([-1,-2,-4,-5,3]), -1.8 );
	equal( fn([-1,-2,-4,3,50]), 9.2 );
});
test("test getVariance()", function(){
	var fn = getVariance;
	equal(fn([]), 0);
	equal(fn( [1,2,3,4,5]), 2.5);
	equal(fn([17,15,23,7,9,13], 1), 33.2);
});
test("test getStandardDeviation()", function(){
	var fn = getStandardDeviation;
	equal(fn( [1,2,3,4,5] ), 1.414);??
	equal(fn( [17,15,23,7,9,13], 2), 5.76);
});
