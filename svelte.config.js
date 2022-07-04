import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		files: {
			assets: 'demo/static',
			hooks: 'demo/hooks',
			lib: 'src',
			params: 'demo/params',
			routes: 'demo/routes',
			serviceWorker: 'demo/service-worker',
			template: 'demo/app.html',
		},
	},
};

export default config;
