// const webpack = require('webpack')
module.exports = {
	publicPath: "/",
	outputDir: "dist", //build输出目录
	assetsDir: "assets", //静态资源目录（js, css, img）
	lintOnSave: false, //是否开启eslint
	pluginOptions: {
		electronBuilder: {
			nodeIntegration: true,
		}
	},
	// configureWebpack: {
	// 	plugins: [
	// 		new webpack.ProvidePlugin({
	// 			$: "jquery",
	// 			jQuery: "jquery",
	// 			"windows.jQuery": "jquery"
	// 		})
	// 	]
	// },
	devServer: {
		open: true, //是否自动弹出浏览器页面
		host: "0.0.0.0",
		port: "8888",
		https: false, //是否使用https协议
		hotOnly: true, //是否开启热更新
		proxy: {
			"/": {
				target: "http://localhost:3000", //API服务器的地址
				ws: true, //代理websockets
				changeOrigin: true, // 虚拟的站点需要更管origin
				pathRewrite: {
					//重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
					"^/": ""
				}
			}
		}
	}
};
