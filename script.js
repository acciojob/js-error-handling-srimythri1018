//your code here
class OutOfRangeError extends Error {
constructor(arg) {
super(Expression should only consist of integers and +-/* characters and not ${arg});
this.name = "OutOfRangeError";
}
}

class InvalidExprError extends Error {
constructor() {
super("Expression should not have an invalid combination of expression");
this.name = "InvalidExprError";
}
}

function evaluateExpression(expression) {
// Check for invalid characters
const validChars = /[0-9+-*/\s]/g;
if (!validChars.test(expression)) {
throw new OutOfRangeError(expression);
}

// Check for invalid expressions
const invalidExprs = /([+-/]{2,}|^\s[+-/]\s|\s+[+-/]\s$)/g;
if (invalidExprs.test(expression)) {
throw new InvalidExprError();
}

// Evaluate the expression
return eval(expression);
}

// Example usage
try {
const result = evaluateExpression("2 + 3 * 4 - 5 / 2");
console.log(result);
} catch (error) {
console.error(error);
}






