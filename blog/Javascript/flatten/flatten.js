Array.isArray = Array.isArray || function(obj){
	return Object.prototype.toString.call(obj) === "[object Array]";
};
/**
* Returns an array that contains non-array elements.
* If an element is an array, then the element is replaced by the content of the array.
* @param{Array} 
* @return{Array} return null if no arguments are passed.
* @example 
    flatten([[1,2],3,[4]]); // returns [1,2,3,4];
*/
var flatten = function(arr){
	if(!Array.isArray(arr)){
		return (arr === null || arr === undefined) ? null : [arr];
	}
	var result = [], obj;
	for(var i = 0, len = arr.length; i < len; i++){
		obj = arr[i];
		if(Array.isArray(arr)){
			obj = flatten(obj);
		}
		result = result.concat( obj );
	}
    return result;
};