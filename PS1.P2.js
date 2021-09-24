const helper = ([left, operator, right]) => {
  return [left, right];
};

const evaluate = (str) => {
  const operator = str.charAt(1);
  switch (operator) {
    case "+":
      return (expression) => {
        const [left, right] = helper(expression);
        return Number(left) + Number(right);
      };
    case "*":
      return (expression) => {
        const [left, right] = helper(expression);
        return Number(left) * Number(right);
      };
    case "-":
      return (expression) => {
        const [left, right] = helper(expression);
        return Number(left) - Number(right);
      };
    case "^":
      return (expression) => {
        const [left, right] = helper(expression);
        return Number(left) ** Number(right);
      };
    case "/":
      return (expression) => {
        const [left, right] = helper(expression);
        return Number(left) / Number(right);
      };
    case "%":
      return (expression) => {
        const [left, right] = helper(expression);
        return Number(left) % Number(right);
      };
    default:
      return;
  }
};

let expression = "4+2";
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

expression = "5*7";
operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

expression = "6-1";
operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

expression = "9/2";
operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

expression = "2^8";
operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

expression = "8%3";
operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);
