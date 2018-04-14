const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
	return {
		preserveWhitepace: true,
		extractCSS: !isDev,  //提取vue中的css打包
		// cssModules: {
		// 	localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
		// 	camelCase: true
		// },
		// hotReload: isDev
		loaders: {
			'docs': docsLoader, //自定义模块
		},

	}
}
