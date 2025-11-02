
DB
- neondb, elephantdb
- docker (locally)
```bash
docker run --name my-postgres -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres
```
// Connection String
	- `postgresql://postgres:password@localhost:5432/postgres?sslmode=diable`

## connect
- library **`pg`** - NodeJS library

## better ways of performing sql queries
- (if there are user-inserted values)
```tsx
const insertQuery = "INSERT INTO users (username, email, password) VALUES ('user1', 'user1@example.com', 'pass123');";
const res = await client.query(insertQuery);
```
- to avoid activities like SQL injection etc.
```tsx
const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);";
const res = await client.query(insertQuery, [username, email, password]);
```

