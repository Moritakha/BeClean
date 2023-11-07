import {useState} from "react";
export const Home = () => {
	const [count, setCount] = useState(0);
	const increment = () => setCount((count) => count + 1);

	return (
		<div>
			<p> Count: {count}</p>
			<button onClick={increment}>Contador</button>
			<button onClick={increment}>decrementar</button>
		</div>
	)
}