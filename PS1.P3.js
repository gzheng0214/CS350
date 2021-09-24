const p3 = (str, decorator) => {
  return decorator(str);
};
// FIRST EXPRESSION
const firstExpression = p3("supercalifragilisticexpialidocious", (str) => {
  let pointerOne = 0;
  let pointerTwo = 1;
  const ans = [];
  while (pointerTwo < str.length) {
    if (str[pointerTwo] === "c") {
      ans.push(str.substring(pointerOne, pointerTwo));
      pointerOne = pointerTwo;
    }
    pointerTwo++;
  }
  ans.push(str.slice(pointerOne));
  return ans;
});
console.log(firstExpression);

// SECOND EXPRESSION
const secondExpression = p3("supercalifragilisticexpialidocious", (str) => {
  let modifiedString = str;
  let numberReplaced = 0;
  while (modifiedString.indexOf("a") != -1) {
    modifiedString = modifiedString.replace("a", "A");
    numberReplaced++;
  }
  return {
    originalString: str,
    modifiedString,
    numberReplaced,
    length: modifiedString.length,
  };
});
console.table(secondExpression);
