import React, { useState } from 'react';

export const App = () => {
	const [state, setState] = useState(222);

	return (
		<div>
			<h1>Hello from SSR React With Bun.js</h1>
			{state}
			<button type="button" onClick={() => setState(prevState => prevState + 1)}>
				Click Me
			</button>
		</div>
	);
};