
***strongly typed language***

## To compile TypeScript code to JS
**`tsc -b`**

## Type to variable
```ts
const x: number = 10;
```

## Types in func
```ts
funtion greet(name: string): boolean {
	if(name === "fun") {
		return true;
	} else {
		return false;
	}
}
```
- function return type is implicitly inferred
- when function is a parameter in another function
	- type of a function: **`() => void`**
```ts
function runAfter1S(fn: () => void) {
	setTimeout(fn, 100);
}

runAfter1S(function() {...})
```

## tsconfig file
- `target` - version of JS, the TS code will get compiled into
- `rootDir` - where the TSC will look for the `.ts` files
- `outDir` - where the compiled code in JS will be

## Interfaces
- ***type*** of objects
```ts
// globally
interface User {
	firstname: string;
	lastname: string;
	age: number;
	email?: string;
}
```
- `email?:` - email is optional here

## Intersection
- a type that has every property of multiple types / interfaces
```ts
type Employee = {
	name: string;
	startDate: Date;
};

type Manager = {
	name: string;
	department: string;
}

type TeamLead = Employee & Manager;
```
- only **type** can ***&*** or ***|*** two types/interfaces, not interfaces
- **if a class implements a type, then it has to be an interface**

## Arrays
- `number[]`

## Enums
- a set of named constants
```ts
enum Direction {
	Up = "Up",
	Down = "Down",
	Left = "Left",
	Right = "Right"
}

function fun(keyPressed: Direction) {
	if(keyPressed == Direction.Left) {
		...
	}
}
```

## Generics
- when we want a type that can be of more than one type
- **T** - template
```ts
function identity<T>(arg: T) {
	return arg;
}

const output1 = identity(string)("abc");
const output2 = identity(number)(1);
```
- implicitly inferred - `function identity<T>(arg: T): T {...}`
- it can implicitly infer the type
```ts
function getFirstElement<T>(arr: T[]): T {
	return arr[0];
}
const el = getFirstElement(["abc", "def"]); // type will be string automatically
const el = getFirstElement([1, 2, 3]); // type will number automatically
```
- if we give an array of mixed type, it will infer **`type | null`**

## Exporting and Importing modules
- ES6 module system -> `import`, `export`
- e.g. `import express from "express";`
- `export const a = 1` -> `import { a } from "./a"`
- `export default const a = 1` -> `import a from "./a"`

---
