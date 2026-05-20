// =============================================
// HOISTING & TDZ - Beginner Friendly Guide
// =============================================

// ----- HOISTING with `var` -----
// Variables declared with `var` are hoisted to the top.
// They are initialized with `undefined`.
console.log(myVar); // undefined (not an error!)
var myVar = 10;
console.log(myVar); // 10

// Behind the scenes, JS sees this as:
// var myVar;
// console.log(myVar); // undefined
// myVar = 10;
// console.log(myVar); // 10

// ----- HOISTING with Functions -----
// Function declarations are HOISTED fully.
sayHello(); // "Hello!" - works fine

function sayHello() {
	console.log("Hello!");
}

// ----- TDZ (Temporal Dead Zone) with `let` & `const` -----
// `let` and `const` are hoisted but NOT initialized.
// Accessing them before declaration throws ReferenceError.
// The zone between "hoisted" and "initialized" is called TDZ.

console.log(myLet); // ❌ ReferenceError: Cannot access before initialization
let myLet = 20;

// ----- TDZ Example -----
{
	// TDZ starts here for `name`
	// console.log(name); // ❌ ReferenceError
	let name = "Pawan"; // TDZ ends here
	console.log(name); // ✅ "Pawan"
}

// ----- Summary -----
// | Keyword | Hoisted? | Initialized?     | TDZ? |
// |---------|----------|------------------|------|
// | var     | Yes      | undefined        | No   |
// | let     | Yes      | Not initialized  | Yes  |
// | const   | Yes      | Not initialized  | Yes  |
