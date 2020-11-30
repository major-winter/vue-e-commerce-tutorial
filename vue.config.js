module.exports = {
	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = 'My Vue Shop';
			return args;
		});
	},
};
