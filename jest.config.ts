import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    // '^.+\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.test.json",
      },
    ],
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/mocks/fileMock.js",
    "^@app/(.*)$": "<rootDir>/$1",
    "\\.(css)$": "identity-obj-proxy",
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 60,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverage: false,
  coverageReporters: ["text", "text-summary"],
  transformIgnorePatterns: ["/node_modules/(?!(uuid)/)"],
};

export default createJestConfig(config);
