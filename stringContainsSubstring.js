const stringContainsSubstring = (str, subStr) => {
  let subStrIndexOccurance = -1;
  const strLen = str.length;
  const subStrLen = subStr.length;
  let charsRemaining = strLen;
  let readingCounter = 0;
  if (strLen < subStrLen) {
    return subStrIndexOccurance;
  };
  for (let i = 0; i < strLen; i++) {
    if (charsRemaining < subStrLen) {
      return subStrIndexOccurance;
    };
    charsRemaining--;
    if (str[i] === subStr[0]) {
      for (let j = 0; j < subStrLen; j++) {
        if (str[i+j] !== subStr[j]) {
          readingCounter = 0;
        };
        if (str[i+j] === subStr[j]) {
          readingCounter++;
        };
        if (readingCounter === subStrLen) {
          return i;
        };
      };
    };
  };
  return subStrIndexOccurance;
};
