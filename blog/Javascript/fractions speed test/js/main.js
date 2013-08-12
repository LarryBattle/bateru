
var checkRatioSimplify = function (min, max, fn) {
	var badValues = 0,
	x = [],
	expect,
	output;
	
	if (max <= min) {
		throw new Error("Min is too high");
	}
	for (var i = min, len = max; i < len; i++) {
		expect = "1/" + i;
		x = fn(1 / i);
		output = x ? x[0] + "/" + x[1] : "null";
		
		if (expect !== output) {
			badValues++;
		}
	}
	return badValues;
};
var runTest = function(name, min, max, fn){
		console.time(name);
		var x = checkRatioSimplify(min, max, fn);
		console.timeEnd(name);
		var amountTested = (max - min);
		var errRate = (100 * ( x / amountTested )).toFixed(2);
		console.log("%s: Error rate = %s%, [%s, %s] has %s different fractions.", name, errRate, min, max, x);
	};

var MIN = 1, 
	MAX = 1e4;

runTest("Ratio()", MIN, MAX, function(d){
	return Ratio.getApprox(d);
});
runTest("rat()", MIN, MAX, function(d){
	return rat.fromDecimal(d);
});
console.log("done");















