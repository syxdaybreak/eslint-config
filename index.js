module.exports = {
	env: {
		es6: true
	},
	extends: [],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		project: './tsconfig.json'
	},
	plugins: [
		'@typescript-eslint',
		'no-eslint-disable'
	],
	rules: {
		'array-bracket-spacing': ['warn', 'never'],
		'arrow-parens': ['warn', 'always'],
		'arrow-spacing': 'error',
		'block-spacing': ['warn', 'always'],
		'comma-dangle': 'warn',
		'comma-spacing': 'warn',
		'computed-property-spacing': ['error', 'never'],
		'curly': 0,
		'eol-last': 'warn',
		'eqeqeq': 'warn',
		'indent': ['warn', 'tab', { SwitchCase: 1 }],
		'jsx-quotes': ['warn', 'prefer-single'],
		'key-spacing': ['warn', { afterColon: true }],
		'keyword-spacing': 'warn',
		'no-async-promise-executor': 'error',
		'no-control-regex': 0,
		'no-debugger': 'error',
		'no-dupe-class-members': 0,
		'no-eslint-disable/no-eslint-disable': 'error',
		'no-labels': 0,
		'no-multiple-empty-lines': 'off',
		'no-multi-spaces': 'warn',
		'no-return-await': 'warn',
		'no-tabs': 'off',
		'no-trailing-spaces': 'warn',
		'no-undef': 'off', // Typescript (ts(2304)) already reports this
		'no-unexpected-multiline': 'warn',
		'no-unused-expressions': 'off',
		'no-useless-constructor': 'off', // NestJS requires use of "useless" constructors
		'no-use-before-define': "off",
		'@typescript-eslint/no-use-before-define': ["error"],
		'no-warning-comments': 'off',
		'@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
		'no-unused-vars': 'off', // ^
		'object-curly-spacing': ['warn', 'always'],
		'padded-blocks': ['off', 'always', { allowSingleLineBlocks: true }],
		'prefer-arrow-callback': ['warn', { allowUnboundThis: true }],
		'prefer-const': 'warn',
		quotes: ['warn', 'single', { allowTemplateLiterals: false }],
		// 'react/jsx-boolean-value': ['warn', 'never'],
		// 'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
		// 'react/jsx-curly-spacing': ['warn', { when: 'never', children: { when: 'always' } }],
		// 'react/jsx-first-prop-new-line': ['warn', 'multiline'],
		// 'react/jsx-indent': ['warn', 3],
		// 'react/jsx-max-props-per-line': ['warn', { when: 'multiline', maximum: 1 }],
		// 'react/jsx-tag-spacing': 'warn',
		// 'react/no-access-state-in-setstate': 'error',
		// 'react/no-children-prop': 'error',
		// 'react/prefer-stateless-function': ['error', { ignorePureComponents: false }],
		// 'react/prop-types': 'off',
		// 'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		// 'react-hooks/exhaustive-deps': 0,
		'rest-spread-spacing': ['warn', 'never'],
		semi: 'off',
		'@typescript-eslint/semi': ['warn', 'never', { beforeStatementContinuationChars: 'any' }],
		'space-before-function-paren': ['warn', 'always'],
		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': ['warn', { int32Hint: true }],
		'@typescript-eslint/type-annotation-spacing': ['warn', {
			after: true,
			overrides: { arrow: { before: true, after: true } }
		}]
	'@typescript-eslint/member-delimiter-style': ['warn', {
			singleline: { requireLast: false, delimiter: 'comma' },
			multiline: { requireLast: false, delimiter: 'comma' }
		}]
	}
}