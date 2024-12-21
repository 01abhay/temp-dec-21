import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import tsImports from 'eslint-plugin-import'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, tsImports.configs.typescript],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': tsImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'after' },
            { pattern: 'react-dom/client', group: 'external', position: 'after' },
            { pattern: 'react-router', group: 'external', position: 'after' },
            { pattern: 'react-router-dom', group: 'external', position: 'after' },
            { pattern: 'zod', group: 'external', position: 'after' },
            { pattern: 'react-hook-form', group: 'external', position: 'after' },
            { pattern: '@hookform/resolvers/zod', group: 'external', position: 'after' },
            { pattern: '@tanstack/react-table', group: 'external', position: 'after' },
            { pattern: 'lucide-react', group: 'external', position: 'after' },
            { pattern: '@/lib/*', group: 'internal', position: 'after' },
            { pattern: '@/hooks/*', group: 'internal', position: 'after' },
            { pattern: '@/components/ui/*', group: 'internal', position: 'after' },
            { pattern: '@/components/app/*', group: 'internal', position: 'after' },
            { pattern: './api(.*)', group: 'internal', position: 'after' },
          ],
          alphabetize: { order: 'ignore' },
        },
      ],
    },
  },
)
