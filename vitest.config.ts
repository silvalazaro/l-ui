import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // ...
  },
  resolve: {
    alias: [{ find: '@src', replacement: '/home/node/app/src' }]
  }
})