import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    vue({
      preprocessStyles: true
    }),
    resolve({
      browser: true,
      extensions: ['.vue', '.js']
    }),
    commonjs(),
    terser()
  ],
  external: [
    'vue',
    'vue-router',
    'axios'
  ],
  globals: {
    vue: 'Vue'
  }
};
