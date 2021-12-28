function naiveStringSearch(longStr, pattern) {
  // count increment
  let count = 0;
  // loop over long string
  for (let i = 0; i < longStr.length; i++) {
    // loop over short string
    for (let j = 0; j < pattern.length; j++) {
      // if long string char equals short string char, yay
      if (pattern[j] !== longStr[i + j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveStringSearch("helloshortshortlad", "short"))

