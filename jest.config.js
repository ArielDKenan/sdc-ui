module.exports = {
	globals: {
		ICON_PATH: './'
	},
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.html$': '<rootDir>/test/react/utils/htmlLoader.js'
	},
	moduleFileExtensions: [
		'js',
		'html'
	],
	moduleNameMapper: {
		'^.+\\.svg$': '<rootDir>/test/react/utils/svgMock.js'
	},
	coveragePathIgnorePatterns: [
		'<rootDir>/src/react/index.js',
		'<rootDir>/src/index.js'
	],
	collectCoverageFrom: [
		'src/**/*.{js,jsx}'
	],
	coverageReporters: [
		'lcov'
	],
	testRegex: '/test/react/.*.(spec|test)\\.jsx?$',
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/'
	]
};
