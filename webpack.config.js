const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

module.exports = {
	entry: {
		// Admin entry points
		'admin': './src/admin/index.js',
		'form-settings': './src/form-settings/index.js',

		// Blocks entry points
		'blocks/button/index': './src/blocks/button/index.js',
		'blocks/button/edit': './src/blocks/button/edit.js',
		'blocks/fieldset/index': './src/blocks/fieldset/index.js',
		'blocks/fieldset/edit': './src/blocks/fieldset/edit.js',
		'blocks/form/index': './src/blocks/form/index.js',
		'blocks/form/edit': './src/blocks/form/edit.js',
		'blocks/input/index': './src/blocks/input/index.js',
		'blocks/input/edit': './src/blocks/input/edit.js',
		'blocks/library/index': './src/blocks/library/index.js',
		'blocks/library/edit': './src/blocks/library/edit.js',
		'blocks/message/index': './src/blocks/message/index.js',
		'blocks/message/edit': './src/blocks/message/edit.js',
		'blocks/multichoices/index': './src/blocks/multichoices/index.js',
		'blocks/multichoices/edit': './src/blocks/multichoices/edit.js',
		'blocks/output/index': './src/blocks/output/index.js',
		'blocks/select/index': './src/blocks/select/index.js',
		'blocks/select/edit': './src/blocks/select/edit.js',
		'blocks/textarea/index': './src/blocks/textarea/index.js',
		'blocks/textarea/edit': './src/blocks/textarea/edit.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
	},
	devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                type: 'asset/source'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new DependencyExtractionWebpackPlugin({
            injectPolyfill: true,
            outputFormat: 'php',
            outputFilename: '[name].asset.php'
        })
    ],
    externals: {
        '@wordpress/element': 'wp.element',
        '@wordpress/components': 'wp.components',
        '@wordpress/i18n': 'wp.i18n',
        '@wordpress/blocks': 'wp.blocks',
        '@wordpress/block-editor': 'wp.blockEditor',
        '@wordpress/data': 'wp.data',
        '@wordpress/hooks': 'wp.hooks',
        '@wordpress/url': 'wp.url',
        '@wordpress/api-fetch': 'wp.apiFetch',
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
