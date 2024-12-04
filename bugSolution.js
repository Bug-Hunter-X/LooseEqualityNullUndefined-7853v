function foo(a) {
  if (a === null) {
    return 0;
  } else if (a === undefined) {
    return 0; // or handle undefined as needed
  } else {
    return a + 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0