// arrays

const arr=[1,2,3,4,5];
// console.log(arr[4]);

const names=["shaktiman","chotabheem","pikachoo"];

const arr2= new Array(1,3,5,2);
// console.log(arr2[3]);

// add element

// arr2.push(6);
// check
// console.log(arr2);
// remove last element
// arr2.pop();
//check ??
// console.log(arr2);

//add element in first position or 0th index

// arr2.unshift(55);

//check??
// console.log(arr2);

// remove first element

// arr2.shift();
// console.log(arr2);

// check element exitance
// include=> return boolean variable
// console.log(arr2.includes(5));

//check indexof particular element
// indexof=>return -1 if not exity else return index
// console.log(arr2.indexOf(5));

// slice, splice

const newarr= arr.join();
// join function can taake all the element of an array and convert it into a string. 
// console.log(typeof newarr);

console.log("A",arr);

//slice=> it can cut the string and transfered to new string but bycopy and last index is not transfered
 
const arr1=arr.slice(1,4);

console.log(arr1);

console.log("B",arr);

//splice=> it also cut the substring but byreference and last index is included

console.log(arr.splice(1,4));

console.log("C",arr);