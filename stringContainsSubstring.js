const stringContainsSubstring = (str, subStr) => {
  const strLen = str.length;
  const subStrLen = subStr.length;
  if (strLen < subStrLen) {
    return -1;
  }
  for (let i = 0; i <= strLen - subStrLen; i++) {
    if (str.slice(i, i + subStrLen) === subStr) {
      return i;
    }
  }
  return -1;
};
