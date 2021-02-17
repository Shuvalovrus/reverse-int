module.exports = function reverse (n) {
  let reverseN = n.toString().split('')
  if(reverseN[0] === '-') {
      reverseN.shift();
  }
  console.log(reverseN);
return Number(reverseN.reverse().join(''));
}