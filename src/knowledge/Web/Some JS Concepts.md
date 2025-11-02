
# Async functions v/s Sync functions

|synchronous |asynchronous |
|:---:|:---:|
|together, one after the other, sequential<br>only one thing is happening at a time |happens in parts<br>multiple things are context-switching with each other |
e.g.
```javascript
setTimeout(func, 1000);
```

---

# Promises

```javascript
// ugly code
function fundSum(n) {
	let ans = 0;
	for (let i=0; i<n; i++) {
		ans += i;
	}
	return ans;
}

function findSumTill100() {
	return findSum(100);
}

setTimeout(findSumTill100(), 1000);
console.log("hello world");
```

- Promises are syntactical sugar that makes this code slightly more readable
- create an asynchronous function of our own

```javascript
const fs = require('fs');

// my own asynchronous function
function myReadFile() {
	return new Promise(function(resolve) {
		fs.readFile("a.txt", "utf-8", function(err, data) {
			resolve(data);
		});
	})
}

// callback function to call
function onDone(data) {
	console.log(data);
}

myReadFile().then(onDone);
```

- whatever is passed on to `resolve()` reaches the `then()` function
- promises on a high-level can have 3 stages
	- *pending*
	- *resolved*
	- *rejected*
- whenever we create a promise, we need to pass in a function as the first argument which has `resolve` as the first argument
---

# Debouncing & Throttling

## Debouncing
- e.g. if the user hasn't typed for 100ms, then send out the request
```html
<html>
	<script>
		let timeout;
		function debouncePopulateDiv() {
			// if this is called again within 100ms of its initial call
			// clear the earlier timeout
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				populateDiv()	
			}, 100);
		}
		function populateDiv() {
			// code here...
		}
	</script>
</html>
```
---

