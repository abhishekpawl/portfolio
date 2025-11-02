
***ORM***

# ORM
- talk to the database
- no worry about the underlying syntax

# Prisma
- an ORM in nodejs
- *data model*
	- define the schema in a single file
	- no CREATE statements
- *automated migrations*
	- prisma keeps track of all the migrations
	- no need to run all the CREATE,... statements when migrating to a new DB
- *type safety*
	- prisma generates a type-safe db client based on the prisma schema
- *auto-completion*
	- (in VSCode)

# Installing prisma in a fresh TS app
- `npm init -y`
- `npm i prisma typescript ts-node @types/node --save-dev`
- `npx tsc --init`
- change `rootDir` to `./src`
- change `outDir` to `./dist`
- `npx prisma init`

# Generate migration
- `npx prisma migrate dev --name UserAndTodoAdded`
- give a name to the migration - `UserAndTodoAdded`

before running - ***`npx prisma generate`***

# Relationship
- to enforce a relationship
- e.g. a *todo* has to relate to a *user*
```prisma
model User {
	id Int @id @default(autoincrement())
	username String @unique
	password String
	firstname String
	lastname String
	todos Todo[]
}

model Todo {
	id Int @id @default(autoincrement())
	title String
	description String
	done Boolean @default(false)
	userId Int
	user User @relation(fields: [userId], references: [id])
}
```
- -> there is a relation between the *userId* field in the **Todo** table and the *id* table in the **User** table
- a function `getTodos()` that gives all the todos for a *userId*
```ts
async function getTodos(userId: number) {
	const response = await prisma.todo.findMany({
		where: {
			userId: userId
		}
	})
	...
}
```

*Important*
- The DB Url in the prisma schema file, that url will be used by the CLI
- The backend will connect to the DB Url mentioned in the wrangler.toml file

