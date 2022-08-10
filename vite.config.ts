import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  build: {
    lib: {
      entry: 'src/components/index.ts',
      name: 'LuUi',
      //  fileName: (format) => `lu-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver(),
        IconsResolver()
      ]
    }),
    Icons({ 
      autoInstall: true
    }),
    dts({ entryRoot: 'src/components' })
  ],
  resolve: {
    alias: [{ find: '@src', replacement: '/home/node/app/src' }]
  }
  //plugins: [vue()]
})
