import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import builtins from 'rollup-plugin-node-builtins';

export default [
  {
    input: './dist/src/index.js',
    plugins: [
      builtins(),
      babel({
        exclude: 'node_modules/**',
      }),
      nodeResolve({
        browser: true,
      }),
      uglify(),
    ],
    output: {
      file: './dist/build/cjs.min.js',
      format: 'cjs',
      name: 'crossmark',
      exports: 'named',
    },
  },
  {
    input: './dist/src/index.js',
    plugins: [
      builtins(),
      babel({
        exclude: 'node_modules/**',
      }),
      nodeResolve({
        browser: true,
      }),
      uglify(),
    ],
    output: {
      file: './dist/build/es.min.js',
      format: 'es',
      name: 'crossmark',
      exports: 'named',
    },
  },
];
