
*User1* - INR 1000
*User2* - INR 20

**Bank** - INR 1020

if *User1* sends INR 100 to *User2*, then **either everything should happen or nothing should happen**
- **everything**
	- *User1* should update to INR 900
	- *User2* should update to INR 120
- **nothing**
	- *User1* updates and *User2* doesn't or vice versa
		- **this should not happen**

# How to perform this?
- An endpoint to get their balance
- An endpoint to transfer money - ***transactions***
	- create a session
		- `const session = await mongoose.startSession()`
	- start a transaction
		- `session.startTransaction()`
	- anything that comes between `session.startTransaction()` ans `session.commitTransaction()`, either all of that happens together or none of that happens
- if any check is unsuccessful
	- abort the transaction
	- `session.abortTransaction()`

