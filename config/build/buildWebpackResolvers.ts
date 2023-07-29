import webpack from 'webpack';
import { webpackConfigOptions } from './types/buildWebpack';

export const buildWebpackResolvers = (
	options: webpackConfigOptions
): webpack.ResolveOptions => {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	};
};
