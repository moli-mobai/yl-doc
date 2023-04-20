import{_ as s,c as n,o as a,Q as p}from"./chunks/framework.366ac521.js";const F=JSON.parse('{"title":"项目介绍","description":"","frontmatter":{},"headers":[],"relativePath":"yl-cl-vue3-v1/introduce.md"}'),l={name:"yl-cl-vue3-v1/introduce.md"},o=p(`<h1 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h1><pre><code>后台项目基础框架(Vue3版)
</code></pre><h2 id="项目层级" tabindex="-1">项目层级 <a class="header-anchor" href="#项目层级" aria-label="Permalink to &quot;项目层级&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  ├── </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">husky # git 钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── html # 原生页面</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   └──  ie # ie浏览器升级提醒页</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── public # 公共静态资源目录</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── src # 主目录</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── api # 接口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── assets # 图片 样式等静态资源文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── base</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ui # 可配置化表单组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   │   ├── pageContent # 表格数据</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">配置组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   │   ├── pageModal # 表单弹窗</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">配置组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   │   └── pageSearch # 表单搜索</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">配置组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── components # 公共组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── directives # 项目指令</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── layout # 视图布局文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── mock # 模拟数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── plugins # 全局拓展方法定义</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── router # 路由配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── store # </span><span style="color:#82AAFF;">数据仓库</span><span style="color:#A6ACCD;">(pinia)</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── typings # 全局声明</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── utils # 工具类</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── views # 页面</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts # vue3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">0函数封装声明</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── App</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue # app入口</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── components</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts  # </span><span style="color:#82AAFF;">自动加载组件库</span><span style="color:#A6ACCD;">(unplugin</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vue</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">components)		 </span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts # env文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">css # tailwindcss</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── main</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts # 主入口</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   ├── permission</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts # 权限管理</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   └── setting</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts # 系统配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cz</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js # 提交规范配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">editorconfig # 编码格式</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">development # 开发环境配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">production # 生产环境配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">staging # 测试环境配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">eslintignore # 忽略语法检查</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">eslintrc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js # eslint 配置项</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gitignore # git 忽略项</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prettierrc # git 代码规范</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── auto</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">imports</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts # </span><span style="color:#82AAFF;">自动加载组件库</span><span style="color:#A6ACCD;">(unplugin</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">auto</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">import)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── commitlint</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js # 提交规范验证</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html # 项目html入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── package</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── README</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">md</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── tsconfig</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├── tsconfig</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── vite</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts # vite配置文件</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function c(t,A,r,C,D,y){return a(),n("div",null,e)}const d=s(l,[["render",c]]);export{F as __pageData,d as default};
