import express from 'express';
import { render } from './components/entry-server';

const app = express();

app.use(express.static('public'));

app.get('/*', (req, res) => {
	const appString = render(req.url, { url: req.url });
	const html = `
		<!doctype html>
		<html lang="en">
			<head>
				<title>SSR with Bun.js</title>
			</head>
			<body>
				<div id="root">${appString}</div>
				<script src="/entry-client.js" type="module"></script>
			</body>
		</html>
	`;

	res.send(html);
});

app.listen(3000, () => {
	console.log('Server running on port http://localhost:3000');
});