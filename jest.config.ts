import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['./src'],
  verbose: true,
  testEnvironment: 'node',
  preset: 'ts-jest',
  coverageReporters: ['text-summary'],
  collectCoverageFrom: ['src/*.ts'],
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  coverageDirectory: 'src/tests',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};

export default config;
