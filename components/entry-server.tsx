import React from 'react';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import { App } from './app';
import type { Options } from './types';

export function render(url: string, options: Options) {
	return renderToString(
		<StaticRouter location={url}>
			<App {...options}/>
		</StaticRouter>
	);
}
