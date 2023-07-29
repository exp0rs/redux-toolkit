import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { webpackConfigOptions } from './types/buildWebpack';

export const buildWebpackLoaders = (
	options: webpackConfigOptions
): webpack.ModuleOptions => {
	return {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					{
						loader: 'css-loader',
						options: {
							modules: {
								auto: (resPath: string) => resPath.includes('.module.'),
								localIdentName: options.isDev
									? '[name]__[local]--[hash:base64:5]'
									: '[hash:base64:8]',
							},
						},
					},
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	};
};
