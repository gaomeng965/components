/*
 * @Author: your name
 * @Date: 2020-04-30 13:35:01
 * @LastEditTime: 2020-05-07 13:55:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gm-design/.fatherrc.js
 */
const options = {
	entry: 'src/index.js',
	doc: {
		title: 'gm-design',
		themeConfig: { mode: 'light' },
		base: '/gm-design'
	},
	extraBabelPlugins: [
		[
			'babel-plugin-import',
			{
				libraryName: 'antd',
				libraryDirectory: 'es',
				style: true
			}
		]
	],
	cssModules: true,
	extractCSS: true,
	lessInBabelMode: true,
	runtimeHelpers: true,
	esm: 'babel',
	cjs: 'babel',
	autoprefixer: {
		browsers: ['ie>9', 'Safari >= 6']
	}
};

export default options;
