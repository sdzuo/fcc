//using recursion and .reduce we can determine the least common multiple of numbers in arr
// i.e. lcm (1,2,3,4,5) = lcm ((1,2),3),4),5)
function smallestCommons(arr) {
  let myrange = range(arr);
  return myrange.reduce((a,b) => lcm(a,b));
}
//function to return the least common multiple of two numbers
function lcm(a,b) {
  return a*b/gcd(a,b);
}
//function to return an array of the numbers between (the range)
function range(arr){
  arr = arr.sort((a,b) => a-b);
  let myArr = [];
  for (let i = arr[0]; i <= arr[1]; i++){
    myArr.push(i);
  }
  return myArr;
}
//function to return the greatest common divisor through
//recursion/Euclidean Algorithm
function gcd(a,b){
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
console.log(smallestCommons([10,2]));
