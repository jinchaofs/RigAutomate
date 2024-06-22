import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const packageName = process.env.PACKAGE;

if (!packageName) {
  throw new Error('PACKAGE environment variable must be set');
}
const packagePath = `packages/${packageName}`;

export default {
  input: `${packagePath}/src/index.ts`,
  output: [
    { file: `${packagePath}/lib/${packageName}.esm.js`, format: 'esm', sourcemap: true },
    { file: `${packagePath}/lib/${packageName}.cjs.js`, format: 'cjs', sourcemap: true },
  ],
  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    commonjs({
      include: 'node_modules/**', // 处理 node_modules 中的模块
    }),
    typescript({
      tsconfig: `${packagePath}/tsconfig.json`,
    }),
  ],
};
