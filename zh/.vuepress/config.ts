import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
// import { path } from '@vuepress/utils'

import path from 'path'

const navbar = [
  {
    text: '指南',
    children: [
      {
        text: '快速开始',
        children: [
          {
            text: '新手指南',
            link: '/zh/docs/handbook/typescript-from-scratch.html',
          },
          {
            text: 'JavaScript开发者',
            link: '/zh/docs/handbook/typescript-in-5-minutes.html',
          },
          {
            text: 'Java/C 开发者',
            link: '/zh/docs/handbook/typescript-in-5-minutes-oop.html',
          },
          {
            text: '函数式开发者',
            link: '/zh/docs_',
          },
          {
            text: '5分钟上手',
            link: '/zh/docs_',
          },
        ],
      },
      {
        text: '在多个环境中使用TS',
        children: [
          {
            text: 'ASP.NET Core',
            link: '/zh/docs_',
          },
          {
            text: 'Gulp',
            link: '/zh/docs_',
          },
          {
            text: 'DOM Manipulation',
            link: '/zh/docs_',
          },
          {
            text: 'Migrating from JavaScript',
            link: '/zh/docs_',
          },
          {
            text: 'Using Babel with TypeScript',
            link: '/zh/docs_',
          },
        ],
      },
      {
        text: 'JS中支持TS的工具',
        children: [
          {
            text: 'JS Projects Utilizing TypeScript',
            link: '/zh/docs_',
          },
          {
            text: 'Type Checking JavaScript Files',
            link: '/zh/docs_',
          },
          {
            text: 'DOM Manipulation',
            link: '/zh/docs_',
          },
          {
            text: 'JSDoc Reference',
            link: '/zh/docs_',
          },
          {
            text: 'Creating .d.ts Files from .js files',
            link: '/zh/docs_',
          },
        ],
      },
    ]
  },
  {
    text: 'TS编译配置',
    children: [
      {
        text: '什么是tsconfig.json',
        link: '/zh/docs_',
      },
      {
        text: 'MSBuild中的编译器选项',
        link: '/zh/docs_',
      },
      {
        text: 'TSConfig参考',
        link: '/zh/docs_',
      },
      {
        text: 'tsc选项',
        link: '/zh/docs_',
      },
      {
        text: '项目参考',
        link: '/zh/docs_',
      },
      {
        text: '与构建工具集成',
        link: '/zh/docs_',
      },
      {
        text: '监听器配置',
        link: '/zh/docs_',
      },
      {
        text: '每日构建',
        link: '/zh/docs_',
      },
    ],
  },
  {
    text: 'TS手册',
    children: [
      {
        text: '关于手册',
        link: '/zh/docs_',
      },
      {
        text: '基础知识',
        link: '/zh/docs_',
      },
      {
        text: '日常类型',
        link: '/zh/docs_',
      },
      {
        text: '类型收缩',
        link: '/zh/docs_',
      },
      {
        text: '更多关于函数的信息',
        link: '/zh/docs_',
      },
      {
        text: '对象类型',
        link: '/zh/docs_',
      },
      {
        text: '类型操作',
        children: [
          {
            text: '从类型创建类型',
            link: '/zh/docs_',
          },
          {
            text: '泛型',
            link: '/zh/docs_',
          },
          {
            text: '从类型创建类型',
            link: '/zh/docs_',
          },
          {
            text: 'Keyof Type Operator',
            link: '/zh/docs_',
          },
          {
            text: 'Typeof Type Operator',
            link: '/zh/docs_',
          },
          {
            text: 'Indexed Access Types',
            link: '/zh/docs_',
          },
          {
            text: 'Conditional Types',
            link: '/zh/docs_',
          },
          {
            text: 'Mapped Types',
            link: '/zh/docs_',
          },
          {
            text: 'Template Literal Types',
            link: '/zh/docs_',
          },
        ],
      },
      {
        text: 'Classes',
        link: '/zh/docs_',
      },
      {
        text: 'Modules',
        link: '/zh/docs_',
      }
    ],
  },
  {
    text: 'Reference',
    children: [
      { text: 'Utility Types', link: 'zh.docs' },
      { text: 'Cheat Sheets', link: 'zh.docs' },
      { text: 'Decorators', link: 'zh.docs' },
      { text: 'Declaration Merging', link: 'zh.docs' },
      { text: 'Enums', link: 'zh.docs' },
      { text: 'Iterators and Generators', link: 'zh.docs' },
      { text: 'JSX', link: 'zh.docs' },
      { text: 'Mixins', link: 'zh.docs' },
      { text: 'Modules', link: 'zh.docs' },
      { text: 'Module Resolution', link: 'zh.docs' },
      { text: 'Namespaces', link: 'zh.docs' },
      { text: 'Namespaces and Modules', link: 'zh.docs' },
      { text: 'Symbols', link: 'zh.docs' },
      { text: 'Triple-Slash Directives', link: 'zh.docs' },
      { text: 'Type Compatibility', link: 'zh.docs' },
      { text: 'Type Inference', link: 'zh.docs' },
      { text: 'Variable Declaration', link: 'zh.docs' },
    ],
  },
]

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-cn',
  title: 'TypeScript中文手册',
  description: 'TS中文手册',

  // theme: path.resolve(__dirname, './theme'),

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icon-48x48.png',
      },
    ],
  ],

  themeConfig: {
    home: '/',
    logo: '/icon-512x512.png',
    navbar,
    darkMode: true,
    repo: 'https://github.com/Mario34/typescript-handbook-zh-cn',
    sidebarDepth: 3,
    editLink: true,
  },

  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ]
})