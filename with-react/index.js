module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"standard",
		"plugin:react/recommended"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module",
		"project": "./tsconfig.eslint.json"
	},
	"plugins": [
		"react",
		"react-hooks",
		"@typescript-eslint",
		"no-eslint-disable"
	],

	// These are the rules enforced in this repository (in addition to `standard` and `react/recommended`.)
	// If the error/warning message of any of the rules baffle you (which may happen),
	// there are in-depth explanations to every
	// go to https://eslint.org/docs/rules/
	"rules": {
		"array-bracket-spacing": ["warn", "never"],
		"arrow-parens": ["warn", "always"],
		"arrow-spacing": "error",
		"block-spacing": ["warn", "always"],
		"comma-dangle": "warn",
		"comma-spacing": "warn",
		"computed-property-spacing": ["error", "never"],
		"curly": 0,
		"eol-last": "warn",
		"eqeqeq": "warn",
		"indent": ["warn", "tab", { "SwitchCase": 1 }],
		"jsx-quotes": ["warn", "prefer-single"],
		"key-spacing": ["warn", { "afterColon": true }],
		"keyword-spacing": "warn",
		"no-async-promise-executor": "error",
		"no-control-regex": 0,
		"no-debugger": "error",
		"no-eslint-disable/no-eslint-disable": "error",
		"no-labels": 0,
		"no-multiple-empty-lines": "off",
		"no-multi-spaces": "warn",
		"no-return-await": "warn",
		"no-tabs": "off",
		"no-trailing-spaces": "warn",
		"no-undef": 0, // Typescript (ts(2304)) already reports this
		"no-unexpected-multiline": "warn",
		"no-unused-expressions": 0,
		"no-use-before-define": 0,
		"no-useless-return": 0,
		"@typescript-eslint/no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
		"no-unused-vars": 0, // ^
		"object-curly-spacing": ["warn", "always"],
		"padded-blocks": ["off", "always", { "allowSingleLineBlocks": true }],
		"prefer-arrow-callback": ["warn", { "allowUnboundThis": true }],
		"prefer-const": "warn",
		"quotes": ["warn", "single", { "allowTemplateLiterals": false }],
		"react/jsx-boolean-value": ["warn", "never"],
		"react/jsx-curly-brace-presence": ["warn", { "props": "never", "children": "never" }],
		"react/jsx-curly-spacing": ["warn", { "when": "never", "children": { "when": "always" } }],
		"react/jsx-first-prop-new-line": ["warn", "multiline"],
		"react/jsx-indent": ["warn", "tab"],
		"react/jsx-max-props-per-line": ["warn", { "when": "multiline", "maximum": 1 }],
		"react/jsx-tag-spacing": "warn",
		"react/no-access-state-in-setstate": "error",
		"react/no-children-prop": "error",
		"react/prefer-stateless-function": ["error", { "ignorePureComponents": false }],
		"react/prop-types": "off",
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": 0,
		"rest-spread-spacing": ["warn", "never"],
		// "semi": ["warn", "never", { "beforeStatementContinuationChars": "any" }],
		"semi": "off",
		"@typescript-eslint/semi": ["warn", "never", { "beforeStatementContinuationChars": "any" }],
		"space-before-function-paren": ["warn", "always"],
		"space-infix-ops": ["warn", { "int32Hint": true }],
		"@typescript-eslint/type-annotation-spacing": ["warn", {
			"after": true,
			"overrides": { "arrow": { "before": true, "after": true } }
		}]
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
}