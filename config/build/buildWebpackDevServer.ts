import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { webpackConfigOptions } from './types/buildWebpack';

export function buildWebpackDevServer({
	port,
}: webpackConfigOptions): DevServerConfiguration {
	return {
		port: port,
		open: true,
		historyApiFallback: true,
	};
}
