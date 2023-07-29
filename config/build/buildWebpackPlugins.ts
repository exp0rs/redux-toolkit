import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { webpackConfigOptions } from './types/buildWebpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildWebpackPlugins = (
	options: webpackConfigOptions
): webpack.WebpackPluginInstance[] => {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: options.paths.htmlTemplate,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
	];
};
