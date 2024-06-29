import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { App } from './components/app';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	const appString = renderToString(<App/>);
	const html = `
		<!doctype html>
		<html>
			<head>
				<title>SSR with Bun.js</title>
			</head>
			<body>
				<div id="root">${appString}</div>
				<script src="/client.js"></script>
			</body>
		</html>
	`;

	res.send(html);
});

app.listen(3000, () => {
	console.log('Server running on port http://localhost:3000');
});