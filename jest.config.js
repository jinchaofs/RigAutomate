import path from 'path';
import fs from 'fs';

const packageDirs = fs.readdirSync('packages');

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  roots: [...packageDirs.map((dir) => `<rootDir>/packages/${dir}/`)],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
};
