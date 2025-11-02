
*different from express backend app*

# Create app
- initialize a worker
```shell
npm create cloudflare -- my-app
```
- start worker locally
```shell
npm run dev
```

# Routing
- Express code
```js
import express from "express";
const app = express();

app.get("/route", (req, res) => {
	...
})
```
- Cloudflare code
```ts
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);

		if(request.method === "GET") {
			return Response.json({
				message: "get request"
			});
		} else {
			return Response.json({
				message: "not a get request"
			});
		}
	},
};
```

# Deploy app
- login yo wrangler cli
```shell
npx wrangler login
```
- to deploy
```shell
npm run deploy
```

***if it is an async function, it is returning a `Promise<Response>`***

# Hono
- a routing library
- to initialize a hono app
```shell
npm creare hono@latest my-app
```
- routing func
```ts
app.get('/', (c) => {
	...
})
```
- request body e.g. **`c.req.json()`**
	- to be `await`-ed
- request header e.g. **`c.req.header("Authorization")`**
- request query e.g. **`c.req.query("param")`**
- *authentication* middleware
```ts
async function authMiddleware(c: any, next: any) {
	if(c.req.header("Authorization")) {
		...
		await next()
	} else {
		return c.text("Access denied")
	}
}

app.use(authMiddleware)
```

