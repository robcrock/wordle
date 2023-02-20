module.exports = {
  roots: ["./src/", "./src/__tests__/"],
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js,jsx}"],
	coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    "browsers": [
      "chrome",
      "firefox",
      "safari"
    ]
  },
};
