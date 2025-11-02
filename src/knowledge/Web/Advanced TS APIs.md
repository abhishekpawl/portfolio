
# Pick
- allows to create a new *type*
	- by selecting a set of properties from an existing type
- let's say, we have to update a user, but not all of its fields
```ts
interface User {
	id: string;
	name: string;
	age: number;
	email: string;
	password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

function updateUser(UpdatedProps: UpdateProps) {...}
```

# Partial
- makes all properties of a type *optional*
- useful in case of updates
```ts
interface User {
	id: string;
	name: string;
	age: number;
	email: string;
	password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(UpdatedProps: UpdateProps) {...}
```

# Readonly
- an object that should not be altered after initialisation
```ts
interface User {
	id: string;
	readonly name: string;
	age: number;
	email: string;
	password: string;
};
```

# Records and Maps
- **Records** - allows to give a cleaner type to objects
- e.g. an object
```ts
const users: Users = {
	'abc123': { id: 'abc123', name: 'John Doe' },
	'xyz789': { id: 'xyz789', name: 'Jane Doe' },
}
```
- the *type* of this object
```ts
interface User {
	id: string;
	name; string;
};

types Users = Record<string, User>
```
- **Map** - (JavaScript concept)
```ts
const users = new Map()
users.set('abc123', { id: 'abc123', name: 'John Doe' })
users.set('xyz789', { id: 'xyz789', name: 'Jane Doe' })
```
- to get a value
```ts
const user = users.get("abc123")
```
- we can enforce a type while generating a map
```ts
const users = new Map<string, User>()
```

# Exclude
- exclude things
```ts
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
	console.log(`Handling event: ${event}`);
};

handleEvent('click');
```

# Type inference in zod
- existing schema
```ts
const userProfileSchema = z.object({
	name: z.string().min(1, { message: "Name cannot be empty" }),
	email: z.string().email({ message: "Invalid email format" }),
	age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
```
- to infer `UpdateUser` type form the zod schema
```ts
type UpdateUser = z.infer<typeof userProfileSchema>
```

