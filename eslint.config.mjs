import linter from '@hacxy/eslint-config/vue';

export default linter({
  typescript: {
    parserOptions: {
      project: ['./tsconfig.json', 'packages/theme/tsconfig.json']
    }
  },
  rules: {
    'regexp/no-unused-capturing-group': 0
  },
  ignores: [
    'packages/demo/**/*',
    'packages/theme/src/config/*.js'
  ],
});
