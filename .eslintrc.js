module.exports = {
	extends: 'airbnb',
	plugins: [
		'react',
	],
	parser: 'babel-eslint',
	rules: {
		'no-console': 0,
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'semi': ['error', 'always', { 'omitLastInOneLineBlock': true }],
		'max-len': ['error', 120],
		'brace-style': ['error', 'stroustrup']
	},
	globals: {
		'jest': false,
		'describe': false,
		'it': false,
		'beforeEach': false,
		'expect': false,
		'jasmine': false,
		'xit': false
	}
};
