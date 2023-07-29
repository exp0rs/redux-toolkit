import 'webpack-dev-server';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { envBuild } from './config/build/types/buildWebpack';

export default (env: envBuild) => {
	const paths = {
		src: path.resolve(__dirname, 'src'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'dist'),
		htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
	};
	let mode = env.mode || 'development';
	const isDev = mode == 'development' ? true : false;
	const port = env.port || 3000;
	return buildWebpackConfig({ paths, isDev, port, mode });
};
