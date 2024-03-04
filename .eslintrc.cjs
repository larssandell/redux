module.exports = {
	'env': {
		'browser': true,
		'es6': true,
	},
	'extends': [
		'plugin:react/recommended',
		'google',
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
		},
		'ecmaVersion': 2018,
		'sourceType': 'module',
	},
	'plugins': [
		'react',
	],
	'rules': {
		'indent': ['error', 'tab'],
		'no-tabs': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/display-name': 'off',
		'max-len': [2, 100, 4, {'ignoreUrls': true}],
		'require-jsdoc': 0,
		'linebreak-style': 0,
		'new-cap': 'off',
	},
	'settings': {
		react: {
			version: 'detect',
		},
	},
	'parser': '@babel/eslint-parser',
};
