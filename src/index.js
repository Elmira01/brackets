module.exports = function check(str, bracketsConfig) {
  // your solution
  for (let char of str) {
  let charIndex = bracketsConfig.indexOf(char);
  if (charIndex < 0) continue;
  
  let isClose = bracketsConfig.indexOf(char) % 2;
  if (!isClose) {
    stack.push(char);
  } else if (isClose) {
    let previousChar = stack.pop();
    if (bracketsConfig.indexOf(previousChar) !== charIndex - 1) return false;
  }
}
return !!str && !stack.length;
}
