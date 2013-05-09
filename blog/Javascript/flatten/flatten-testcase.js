
test("simple array", function(){
    var fn = flatten;
    deepEqual(fn(null), null);
    deepEqual(fn([]), []);
    deepEqual(fn([1,2]), [1,2]);
});
test("nested", function(){
    var fn = flatten;
    deepEqual(fn([[]]), []);
    deepEqual(fn([[1],2]), [1,2]);
    deepEqual(fn([[1,2],3,[4]]), [1,2,3,4]);
});

test("deeply nested", function(){
    var fn = flatten;
    deepEqual(fn([[]]), []);
    deepEqual(fn([[1],2]), [1,2]);
    deepEqual(fn([[1,2],3,[4]]), [1,2,3,4]);
    deepEqual(fn([[1,2],3,[4,5],[[6],[[[[7]]]]]]), [1,2,3,4,5,6,7]);
	deepEqual(fn([1,[1,[1,[1,[{price:3}]]]]]), [1,1,1,1,{"price":3}]);
});