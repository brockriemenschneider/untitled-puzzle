// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	extends: ['expo', 'prettier'],
	plugins: ['prettier', 'eslint-plugin-paths'],
	rules: {
		indent: ['error', 'tab'],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
			},
		],
		'paths/alias': 'error',
	},
};
