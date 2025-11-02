
# Why cookies
- *Session Management* 
- *Personalisation*
	- personalised content / ads
- *Tracking*
- *Security*

*cookies can be sent from the first page itself*

*browsers, by default, send cookies in every request, we don't have to attach it*

# Properties of cookies
- Types
	- *Persistent*
		- stays even after the window is closed
	- *Session*
		- goes away after the window is closed
	- *Secure*
		- sent only over secure, encrypted connections (HTTPS)
- ***Properties***
	- *HttpOnly*
		- can not be accessed by client side scripts
	- *SameSite*
		- ensures cookies are not sent on cross origin requests
		- **None**
			- csrf attacks can happen
		- **Strict**
			- strictly the website needs to be the same
		- **Lax**
			- only GET requests and on top level navigation
			- chosen by default
	- *Domains*
		- we can specify what all domains should the cookie be sent from

# Code changes
- w.r.t. `localStorage` code
```ts
import jwt, { JwtPayload } from "jsonwebtoken";
...
app.use(cookieParser());
...
app.use(cors({
	credentials: true,
	origin: "<frontend-url>"
}));
...
app.post("/signin", (req, res) => {
	...
	res.cookie("token", token)
})
```
- to verify the token
```ts
app.get("/user", (req, res) => {
	const token = req.cookies.token;
	const decodedUser = jwt.verify(token, JWT_SECRET) as JwtPayload;
	...
})
```
- logout
```ts
res.cookie("token", "");
```

