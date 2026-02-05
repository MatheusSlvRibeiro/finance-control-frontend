import { defineConfig } from 'eslint/config'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'

export default defineConfig([
	{
		ignores: ['.next/**', 'dist/**', 'build/**', 'out/**', 'coverage/**', 'node_modules/**'],
		files: ['src/**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: tsParser,
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'no-undef': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],
		},
	},
])
