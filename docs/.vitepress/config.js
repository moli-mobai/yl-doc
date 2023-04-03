export default {
    base: '/yl-vue3-vitepress/',
    title: 'Vue3-Vite-Cli 使用文档',
    description: '基于vite为基础搭建的风格脚手架,提供多种模板以便于更高效的解决业务需求！',
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'favicon.ico' }]],
    themeConfig: {
        siteTitle: 'Vue3-Vite-Cli 使用文档',
        repo: '',
        repoLabel: '',
        docsDir: 'docs',
        docsBranch: 'master',
        lastUpdatedText: '',
        logo: '/favicon.ico',
        algolia: {
            appId: '',
            apiKey: '',
            indexName: 'vue3-vite-cli'
        },
        nav: [
            { text: '开始阅读', link: '/getting/why.html' },
            { text: '模板', link: '/template/template-vue3-ts-initial.html' },
            { text: '相关文档', link: '/documentation/vue.html' },
            // { text: '码云', link: '' },
        ],
        // socialLinks: [
        //     { icon: 'github', link: '' }
        // ],
        sidebar: [
            // '/getting/': 'auto',
            {
                text: '开始阅读',
                collapsible: true,
                collapsed: false,
                items: [
                    {
                        text: '简介',
                        link: '/getting/why'
                    }, {
                        text: '模板说明',
                        link: '/getting/template_introduction'
                    },
                ]
            },
            {
                text: 'yl-cl-vue3-v1',
                collapsible: true,
                collapsed: false,
                items: [
                    {
                        text: '快速了解',
                        link: '/yl-cl-vue3-v1/index'
                    }, {
                        text: '项目介绍',
                        link: '/yl-cl-vue3-v1/introduce'
                    }, {
                        text: '项目使用',
                        link: ''
                    }, {
                        text: '插件集成',
                        link: ''
                    }, {
                        text: '项目部署',
                        link: ''
                    }, {
                        text: '更新日志',
                        link: ''
                    },
                ]
            },
            {
                text: '相关文档',
                collapsible: true,
                collapsed: false,
                items: [
                    {
                        text: 'Vue 相关文档',
                        link: '/documentation/vue'
                    },
                    {
                        text: 'Webpack 相关文档',
                        link: '/documentation/webpack'
                    }
                ]
            }
        ],
        footer: {
            message: 'ylsoft',
            copyright: 'Copyright © 2023'
        }
    }
}