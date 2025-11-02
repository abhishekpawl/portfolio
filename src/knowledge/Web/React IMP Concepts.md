
# Memo
- to memoize a function
```jsx
import { useEffect, useState, React } from 'react';
import axios from 'axios';

function App() {
	const [todoId, setTodoId] = useState(1);
	const [todo, setTodo] = useState({});

	useEffect(() => {
		axios.get("https://sum-server.100xdevs.com/todo?id=" + todoId)
			.then(res => {
				console.log(res.data)
				setTodo(res.data.todo)
			})
	}, [todoId])
	
	const ids = [1, 2, 3, 4, 5];
	
	return (
		<div>
			{ids.map((id) => (
				<TodoBtn key={id} id={id} setTodoId={setTodoId} ></TodoBtn>
				))}
			<div>
				<h1>{todo.title}</h1>
				<h2>{todo.description}</h2>
			</div>
		</div>
	)
}

const TodoBtn = React.memo(({ id, setTodoId }) => {
	return <button onClick={() => setTodoId(id)}>{id}</button>
})

export default App
```

---

# Custom hooks
```jsx
import { useEffect, useState } from "react";

function useTodos() {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		axios.get("...")
			.then((res) => {
				setTodos(res.data.todos)
			})
	})
	return todos;
}

function App() {
	const todos = useTodos();
	return <div>
		{todos}
	</div>
}

export default App;
```

---

# useMemo and useCallback
- **useMemo**
	- to memoize variables
	- can't have an async function
- **useCallback**
	- to memoize functions

---

# Routing

## Single page application
- dynamically changing the page
- *not* re-fetching the page

## Client side bundle
- bundle that we get from the backend

## Client side routing
- react-router-dom
- code to follow along with the routes
	- if on `/messages`, then it will show the messages page
	- so on...

## react-router-dom
```jsx
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/" element={<Landing />} />
			</Routes>
		</BrowserRouter>
	)
}
```
- to redirect
```jsx
<button onClick={() => {
	window.location.href="/"; ( NOT CLIENT-SIDE ROUTING )
}}>Landing page</button>
```
- right way of navigating
```jsx
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
	const navigate = useNavigate();   // should be inside BrowserRouter
	function handleClick() {          // should be inside BrowserRouter
		navigate('/')                 // should be inside BrowserRouter
	};                                // should be inside BrowserRouter
	return <div>
		Dashboard
		<button onClick={handleClick}>Click to navigate</button>
	</div>
}
```
- `useNavigate` hook can only be imported inside a `BrowserRouter`
```jsx
function AppBar() {
	const navigate = useNavigate();
	return <div>
		<div>
			<button onClick={() -> {
				navigate("/");
			}}>Landing Page</button>
			<button onClick={() -> {
				navigate("/dashboard");
			}}>Dashboard Page</button>
		</div>
	</div>
}
```
- this `AppBar` component should be inside `BrowserRouter`

## Lazy loading
- if the person is on page 1, the person will receive the main react bundle and the code for page 1
```jsx
const Dashboard = React.lazy(() => import("./components/Dashboard"));
```
- we wouldn't have access to the `Dashboard` component immediate
	- React will fetch the component first
	- so here, we need to use the `Suspense` API
```jsx
<Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
```

---

# Recoil

*state management*

## Concept of Atom
- can be defined outside the component
- can be teleported to any component

## Defining an atom
```jsx
// in store/atoms/count.jsx
import { atom } from "recoil";

export const countAtom = atom({
	key: "countAtom",
	default: 0
});
```

*useRecoilState* - get and update
*useRecoilValue* - get
*useSetRecoilValuue* - update
## Importing an atom
```jsx
const CountRenderer() {
	const count = useRecoilValue(countAtom);

	return <div>
		<b>{count}</b>
	</div>
}
```

*RecoilRoot* - the final component using the state should be wrapped inside `<RecoilRoot></RecoilRoot>`

## Selector
- piece of *derived state*
```jsx
export const evenSelector = selector({
	name: "evenSelector",
	get: ({get}) => {
		const count = get(countAtom);
		return count % 2 ? 0 : 1;
	}
})
```

## Asynchronous Data Queries
```jsx
export const notifications = atom({
	key: "networkAtom",
	default: selector({
		key: "networkAtomSelector",
		get: async () => {
			const res = await axios.get("...")
			return res.data
		}
	})
})
```

## AtomFamily
```jsx
/* TODOS - data */
export const todosAtomFamily = atomFamily({
	key: 'todosAtomFamily',
	default: id => {
		return TODOS.find(x => x.id === id)
	}
})
```

## AtomFamily - SelectorFamily
```jsx
export const todosAtomFamily = atomFamily({
	key: 'todosAtomFamily',
	default: selectorFamily({
		key: 'todosSelectorFamily',
		get: function(id) { 
				async function({get}) {
					const res = await axios.get(`...?id=${id}`);
					return res.data.todo;
				}
			}
	})
})
```

## useRecoilStateLoadable
- buffering
- components
	- *contents*
	- *state* - the value of that atom is resolved or not if it includes requests or promises
```jsx
function Todo({id}) {
	const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
	
	if(todo.state === "loading") {
		return <div>
			loading...
		</div>
	} else if(todo.state === "hasValue") {
		return <div>
			{todo.contents.title}
			{todo.contents.description}
		</div>
	}
}
```
- to just access the value - `useRecoilValueLoadable`

---

# Tailwind
- mobile-first approach
- `<div class="text-center sm:text-left"></div>`
	- anything above `sm` then `text-left`
- colour - shades - 50 <-> 950
- background `bg-green-500`
- text `text-red-500`
- mobile-first
	- unprefixed utilities `uppercase` - take effect on all screen sizes
	- prefixed utilities `md:uppercase` - take effect at the *specified breakpoint and above*

---

# Auto-refreshing hooks

*data fetching hook every n seconds*

```jsx
function useTodos(n) {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const value = setInterval(() => {
			axios.get("...")
				.then(res => {
					setTodos(res.data.todos);
				})
				.catch(err => {
					console.log(err);
				})
		}, n * 1000);

		// initial fetch
		axios.get("...")
			.then(res => {
				setTodos(res.data.todos);
			})
			.catch(err => {
				console.log(err);
			})
	
		// clean up function - to clear previous interval if interval changes
		return () => clearInterval(value);
	}, [n])

	return todos;
}
```

- we need to *clear* the interval because if the interval changes later in the lifecycle of the app, then there will be 2 clocks running, one with the previous **n** and the other with the new **n**
- so the previous clock needs to be cleared

---

# SWR - React hook for data fetching

- library in React

```jsx
import useSWR from 'swr';

const fetcher = async function(url) {
	const data = await fetch(url);
	const json = await data.json();
	return json;
}

function Fun() {
	const { data, error, isLoading } = useSWR("...", fetcher);

	if(error) ...
	if(isLoading) ...
	return ...
}
```

---

# Browser functionality - hooks

## `useIsOnline` hook
- true or false based on if the user is currently online
```jsx
function useIsOnline() {
	const [isOnline, setIsOnline] = useState(window.navigator.onLine);
	useEffect(() => {
		window.addEventListener("online", () => {
			setIsOnline(true);
		})
		window.addEventListener("offline", () => {
			setIsOnline(false);
		})
		// cleanup
		return () => {
			window.removeEventListener("online", () => {
				setIsOnline(true);
			})
			window.removeEventListener("offline", () => {
				setIsOnline(false);
			})
		}
	}, [])
	return isOnline;
}
```

## `useMousePointer` hook
- to get the coordinates of the pointer
```jsx
function useMousePointer() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const handleMouseMove = e => {
		setPosition({ x: e.clientX, y: e.clientY })
	};
	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		// cleanup
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		}
	}, []);
	return position;
}
```

## `useInterval` hook
- run a **function** every **n** milliseconds
```jsx
function useInterval(fn, timeout) {
	useEffect(() => {
		const value = setInterval(() => {
			fn();
		}, timeout);
		return () => {
			clearInterval(value);	
		}
	}, [fn, timeout]);
}
```

## `useDebounce` hook
- e.g. should not send out a req unless no activity has happened from n unit of time
	- e.g. amazon search bar
- `debouncedValue` - store the value, until we are ready to fire off the request
```jsx
const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(timerId);
		} 
	}, [value, delay]);
	return debouncedValue;
}
```
- then in main component, we can write a useEffect hook with `debouncedValue` as a dependency, where the request will fire off
```jsx
funciton App() {
	const [value, setValue] = useState(0);
	const debouncedValue = useDebounce(value, 500);
	useEffect(() => {
		// axios / fetch request
	}, [debouncedValue])
	return ...
}
```
- (OR)
```jsx
function useDebounce() {...}

function App() {
	const [value, setValue] = useState(0);
	const debouncedValue = useDebounce(value, 500);
	return (
		<>
			Value is {debouncedValue}
			<Input value={value} onChange={e => setValue(e.target.value)} />
		</>
	)
}
```

---

# Hacks

## To align the avatar icon and labels
- wrap the avatar in a div and give class names - **`flex justify-center flex-col`**
```tsx
<div className="flex">
	<div className="flex justify-center flex-col">
		<Avatar authorName={ authorName } />
	</div>
	<div className="font-thin">{ authorName }</div>
	<div>{ publishedDate }</div>
</div>
```

