/*
 * @Author: your name
 * @Date: 2020-04-30 13:35:01
 * @LastEditTime: 2020-04-30 13:36:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ncp-design/.fatherrc.js
 */
const options = {
	entry: 'src/index.js',
	doc: {
		title: 'ncp-design',
		themeConfig: { mode: 'light' },
		base: '/ncp-design'
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
	// cssModules: true,
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
