module.exports = {
	extends: 'airbnb',
	plugins: [
		'react',
	],
	parser: 'babel-eslint',
	rules: {
		'no-console': 0,
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'semi': ['error', 'always', { 'omitLastInOneLineBlock': true}]
	},
	globals: {
		'jest': false,
		'describe': false,
		'it': false,
		'beforeEach': false,
		'expect': false,
		'jasmine': false
	}
};
