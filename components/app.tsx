import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router';
import type { Options } from './types';

const HomePage = lazy(() => import('./pages/home/page'));
const AboutPage = lazy(() => import('./pages/about/page'));

export function App({ url }: Options) {
	return (
		<div>
			<h1 style={{ color: 'red', fontSize: 45 }}>{url}</h1>
			<nav>
				<Link to="/">Главная</Link> | <Link to="/about">О нас</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Suspense><HomePage/></Suspense>}/>
				<Route path="/about" element={<Suspense><AboutPage/></Suspense>}/>
			</Routes>
		</div>
	);
}
