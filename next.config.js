const calendarTranspile = require('next-transpile-modules')([
	'@fullcalendar/common',
	'@fullcalendar/react',
	'@fullcalendar/daygrid',
	'@fullcalendar/list',
	'@fullcalendar/timegrid'
]);

const withImages = require('next-images');

module.exports = {
	// webpack: (
	// 	config,
	// 	{ buildId, dev, isServer, defaultLoaders, webpack }
	// ) => {
	// 	config.optimization.splitChunks.cacheGroups = {};
	// 	config.optimization.minimize = true;
	// 	return config;
	// },
	distDir: 'out',
	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	}
};
