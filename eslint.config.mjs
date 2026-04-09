import js from '@eslint/js'
import next from '@next/eslint-plugin-next'
import react from 'eslint-plugin-react'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import globals from 'globals'
import nextVitals from 'eslint-config-next/core-web-vitals'
import stylistic from '@stylistic/eslint-plugin'

const eslintConfig = [
	...nextVitals,
	{
		ignores: ['**/node_modules/**', '**/.next/**', '**/.git/**', '**/.vscode/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts']
	},
	{
		files: ['**/*.{ts,tsx}'],
		ignores: ['src/app/sw.ts'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: tsparser,
			parserOptions: {
				project: './tsconfig.json'
			},
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			'@typescript-eslint': tseslint,
			'@stylistic': stylistic
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...next.configs.recommended.rules,
			...tseslint.configs.recommended.rules,
			'@typescript-eslint/no-base-to-string': 'error',
			'@typescript-eslint/require-await': 'error',
			'@typescript-eslint/unbound-method': 'error',
			'react/react-in-jsx-scope': 'off',
			'no-template-curly-in-string': 'off',
			'no-misleading-character-class': 'off',
			'no-unsafe-optional-chaining': 'off',
			'no-undef': 'off',
			'no-mixed-spaces-and-tabs': 'off',
			'no-unused-vars': 'off',
			'no-dupe-keys': 'error',
			'react/prop-types': 'off',
			'react/jsx-key': 'error',
			'no-console': ['warn', { allow: ['warn', 'error', 'info', 'table'] }],
			'react/display-name': 'off',
			'no-extra-boolean-cast': 'off',
			'react-hooks/purity': 'off',
			'react-hooks/exhaustive-deps': 'off',
			'react-hooks/rules-of-hooks': 'off',
			'react-hooks/use-memo': 'off',
			'react-hooks/set-state-in-effect': 'off',
			'prefer-const': 'warn',
			'no-control-regex': 'off',
			'@stylistic/padding-line-between-statements': [
				'error',
				{ blankLine: 'always', prev: '*', next: 'return' },
				{ blankLine: 'always', prev: 'directive', next: '*' },
				{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
				{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
				{ blankLine: 'always', prev: 'block-like', next: '*' },
				{ blankLine: 'always', prev: '*', next: 'block-like' },
				{ blankLine: 'always', prev: ['multiline-const'], next: '*' },
				{ blankLine: 'always', prev: '*', next: ['multiline-const'] },
				{ blankLine: 'always', prev: '*', next: ['if', 'for', 'switch', 'try', 'while'] },
				{ blankLine: 'always', prev: ['if', 'for', 'switch', 'try', 'while'], next: '*' },
				{ blankLine: 'always', prev: 'import', next: '*' },
				{ blankLine: 'any', prev: 'import', next: 'import' },
				{ blankLine: 'always', prev: '*', next: 'export' },
				{ blankLine: 'always', prev: '*', next: ['interface', 'type', 'return'] },
				{ blankLine: 'always', prev: ['interface', 'type'], next: '*' }
			],
			'@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
			'@stylistic/jsx-child-element-spacing': 'error',
			'@stylistic/jsx-pascal-case': ['error', { allowNamespace: true }],
			'@stylistic/jsx-self-closing-comp': 'error',
			'arrow-parens': ['error', 'always'],
			'no-self-compare': 'error',
			'no-case-declarations': 'error',
			curly: ['error', 'all'],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true
				}
			],
			'sort-imports': [
				'error',
				{
					ignoreCase: true,
					ignoreDeclarationSort: true,
					ignoreMemberSort: false,
					allowSeparatedGroups: false
				}
			],
			'import/order': [
				'error',
				{
					groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index'], 'type', 'object', 'unknown'],
					alphabetize: { order: 'asc', caseInsensitive: true },
					'newlines-between': 'always',
					pathGroups: [
						{
							pattern: '@/**',
							group: 'internal'
						}
					],
					pathGroupsExcludedImportTypes: ['type']
				}
			],
			'no-restricted-syntax': [
				'error',
				{
					selector: `JSXElement[openingElement.name.name='pre'] > JSXExpressionContainer > CallExpression[callee.object.name='JSON'][callee.property.name='stringify'][arguments.length>=3]`,
					message: `Don't leave JSON.stringify inside <pre> in production code.`
				}
			],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'separate-type-imports'
				}
			],
			'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
			'import/no-duplicates': ['error', { 'prefer-inline': false }],
			'import/no-namespace': 'error'
		},
		settings: {
			react: {
				version: 'detect'
			},
			'import/resolver': {
				typescript: {
					project: './tsconfig.json'
				}
			}
		}
	},
	{
		files: ['src/app/sw.ts'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				project: './tsconfig.worker.json'
			},
			globals: {
				...globals.serviceWorker
			}
		},
		plugins: {
			'@typescript-eslint': tseslint
		},
		rules: {
			...tseslint.configs.recommended.rules,
			'no-restricted-globals': 'off'
		},
		settings: {
			'import/resolver': {
				typescript: {
					project: './tsconfig.worker.json'
				}
			}
		}
	}
]
export default eslintConfig
