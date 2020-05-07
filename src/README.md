# 组件规范须知

- 每个组件单独一个文件夹，文件夹名为组件名，大写开头。例：Button
- 组件文件内必有两个文件，index.js, index.module.less 以及 index.mdx，
- index.js 和 index.module.less 个是组件实现逻辑及样式代码。
- index.mdx 是组件说明文档，语法按照[docz 框架](https://www.docz.site/docs/writing-mdx)，可参考 Button.mdx

## index.mdx 头部的信息：

- name 组件的名称，也就是显示在左部导航栏里的导航文本
- route 组件页面的路由
- order 组件在导航条中显示的顺序
- siderbar 当前页面是否显示导航条

## doc 文档运行

```js
yarn dev
```

## 打包发布

```
// 打包编译组件库
yarn build

// 编译组件库文档，该步骤可省略
yarn build:doc

// 部署组件库文档到github, 该步骤可省略
yarn deploy

// 发布到npm上，（注意修改版本号以及维护变根目录下的README里的版本更历史）
npm publish --access public
```
