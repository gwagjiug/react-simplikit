import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      extension: ['.ts', '.tsx'],
      include: ['src/**/*.ts?(x)'],
      exclude: ['src/**/index.ts', 'src/**/*.spec.ts?(x)'],
    },
  },
});
