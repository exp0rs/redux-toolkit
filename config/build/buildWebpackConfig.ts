import webpack from 'webpack';
import { buildWebpackLoaders } from './buildWebpackLoaders';
import { buildWebpackResolvers } from './buildWebpackResolvers';
import { buildWebpackPlugins } from './buildWebpackPlugins';
import { webpackConfigOptions } from './types/buildWebpack';
import { buildWebpackDevServer } from './buildWebpackDevServer';

export const buildWebpackConfig = (
	options: webpackConfigOptions
): webpack.Configuration => {
	const { paths, isDev, mode } = options;
	return {
		mode,
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildWebpackDevServer(options) : undefined,
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: '[name].[contenthash].bundle.js',
			clean: true,
		},
		module: buildWebpackLoaders(options),
		resolve: buildWebpackResolvers(options),
		plugins: buildWebpackPlugins(options),
	};
};
