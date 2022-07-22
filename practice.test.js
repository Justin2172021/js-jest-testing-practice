const practice = require("./practice");

test("A capitalize function that takes a string and returns it with the first character capitalized", () => {
    expect(practice.capitalize("this is a test")).toBe("This is a test");
});

test("A reverseString function that takes a string and returns it reversed.", () => {
    expect(practice.reverseString("this is a test")).toBe("tset a si siht");
});

test("A calculator object that contains functions for the basic operations: ADD", () => {
    expect(practice.calculator.add(1,1)).toBe(2);
});

test("A calculator object that contains functions for the basic operations: SUBTRACT", () => {
    expect(practice.calculator.sub(2,1)).toBe(1);
});

test("A calculator object that contains functions for the basic operations: MULTIPLY", () => {
    expect(practice.calculator.mul(2,3)).toBe(6);
});

test("A calculator object that contains functions for the basic operations: DIVIDE", () => {
    expect(practice.calculator.div(10,2)).toBe(5);
});
