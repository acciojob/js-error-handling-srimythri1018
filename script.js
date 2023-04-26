class OutOfRangeError extends Error {
  constructor(arg) {
    const message = `Expression should only consist of integers and +-/* characters and not ${arg}`;
    super(message);
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    const message = `Expression should not have an invalid combination of expression`;
    super(message);
    this.name = this.constructor.name;
  }
}
