
// เหมือนที่เรียนตอนเช้า
// แปลงเป็น string
// reverse
// เรียงกันแล้วเทียบกับของเก่า 
function isPalindrome(string) {
  // Start coding here
  let reversetext = string.split("").reverse().join("");
  return reversetext === string
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false