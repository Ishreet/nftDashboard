const path = require('path');

const calendarTranspile = require('next-transpile-modules')([
	'@fullcalendar/common',
	'@fullcalendar/react',
	'@fullcalendar/daygrid',
	'@fullcalendar/list',
	'@fullcalendar/timegrid'
]);

const withImages = require('next-images');

module.exports = {
	webpack: (config) => {
		config.resolve.alias.src = path.join(__dirname, 'src');
		return config;
	}
};

module.exports = withImages(
	calendarTranspile({
		i18n: {
			defaultLocale: 'en-US',
			locales: ['en-US']
		}
	})
);
