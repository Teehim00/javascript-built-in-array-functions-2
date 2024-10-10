function isPalindrome(string) {
  // Start coding here
  const normalizedName = string.toLowerCase();
  const reverseString = normalizedName.split("").reverse().join("");
  return normalizedName === reverseString;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
