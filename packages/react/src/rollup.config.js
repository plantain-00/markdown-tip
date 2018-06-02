import { uglify } from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'packages/react/dist/index.js',
  name: 'MarkdownTip',
  plugins: [
    resolve(),
    uglify(),
    commonjs()
  ],
  output: {
    file: 'packages/react/dist/markdown-tip-react.min.js',
    format: 'umd'
  },
  external: [
    'react',
    'react-dom'
  ]
}
