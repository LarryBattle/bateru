/**
 * FizzBuzz in javascript
 *
 * @author Larry Battle (http://bateru.com/news)
 * @date 11.30.2012
 * @info (http://bateru.com/news/2012/10/code-of-the-day-fizzbuzz-in-javascript/)
 */
var log = function (str) {
	if (typeof console === "object") {
		console.log(str);
	}
};

// FizzBuzz without if conditions.
var getFizzBuzzStatements_switch = function (len) {
	var arr = [];
	for (var i = 1; i <= len; i++) {
		switch (i % 15) {
		case 0:
			arr.push("FizzBuzz");
			break;
		case 3:
		case 6:
		case 9:
		case 12:
			arr.push("Fizz");
			break;
		case 5:
		case 10:
			arr.push("Buzz");
			break;
		default:
			arr.push(i);
		}
	}
	return arr;
};

// FizzBuzz with if conditions
var getFizzBuzzStatements_ternary = function (len) {
	var arr = [],
	str = "";
	for (var i = 1; i <= len; i++) {
		str = (i % 3) ? "" : "Fizz";
		str += (i % 5) ? "" : "Buzz";
		arr.push(str || i);
	}
	return arr;
};
var fizzBuzz_switch = function () {
	log(getFizzBuzzStatements_switch(100).join("\n"));
};
var fizzBuzz_ternary = function () {
	log(getFizzBuzzStatements_ternary(100).join("\n"));
};
// FizzBuzz One liner
var fizzBuzz_oneliner = function () {
	for (i = 1; i <= 100; i++) {
		log((((i % 3) ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i) + "\n")
	}
};
