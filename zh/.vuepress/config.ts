import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
// import { path } from '@vuepress/utils'

import path from 'path'

// 原文档目录: https://www.typescriptlang.org/docs/
const navbar = [
  {
    text: '指南',
    children: [
      {
        text: '快速开始',
        children: [
          {
            text: '新手指南',
            link: '/get-started/ts-for-the-new-programmers',
          },
          {
            text: 'JavaScript开发者',
            link: '/get-started/ts-for-js-programmers',
          },
          {
            text: 'Java/C 开发者',
            link: '/get-started/ts-for-oopers',
          },
          // {
          //   text: '函数式开发者',
          //   link: '',
          // },
          {
            text: '5分钟上手',
            link: '/tutorials/typescript-in-5-minutes',
          },
        ],
      },
      {
        text: '在多个环境中使用TS',
        children: [
          {
            text: 'ASP.NET Core',
            link: '/tutorials/asp.net-core',
          },
          {
            text: 'Gulp',
            link: '/tutorials/gulp',
          },
          // {
          //   text: 'DOM Manipulation',
          //   link: '/tutorials/',
          // },
          {
            text: 'Migrating from JavaScript',
            link: '/tutorials/migrating-from-javascript',
          },
          // {
          //   text: 'Using Babel with TypeScript',
          //   link: '/tutorials/',
          // },
        ],
      },
      {
        text: 'JS中支持TS的工具',
        children: [
          // {
          //   text: 'JS Projects Utilizing TypeScript',
          //   link: '',
          // },
          {
            text: 'Type Checking JavaScript Files',
            link: '/javascript/type-checking-javascript-files',
          },
          // {
          //   text: 'DOM Manipulation',
          //   link: '',
          // },
          // {
          //   text: 'JSDoc Reference',
          //   link: '',
          // },
          // {
          //   text: 'Creating .d.ts Files from .js files',
          //   link: '',
          // },
        ],
      },
    ]
  },
  {
    text: 'TS编译配置',
    children: [
      {
        text: '什么是tsconfig.json',
        link: '/project-config/tsconfig.json',
      },
      {
        text: 'MSBuild中的编译器选项',
        link: '/project-config/compiler-options-in-msbuild',
      },
      {
        text: 'compiler选项',
        link: '/project-config/compiler-options',
      },
      // {
      //   text: 'tsc选项',
      //   link: '',
      // },
      // {
      //   text: '项目参考',
      //   link: '',
      // },
      {
        text: '与构建工具集成',
        link: '/project-config/integrating-with-build-tools'
      },
      {
        text: '监听器配置',
        link: '/project-config/configuring-watch',
      },
      {
        text: '每日构建',
        link: '/project-config/nightly-builds',
      },
    ],
  },
  {
    text: 'TS手册v2',
    children: [
      // {
      //   text: '关于手册',
      //   link: '',
      // },
      // {
      //   text: '基础知识',
      //   link: '',
      // },
      // {
      //   text: '日常类型',
      //   link: '',
      // },
      // {
      //   text: '类型收缩',
      //   link: '',
      // },
      // {
      //   text: '更多关于函数的信息',
      //   link: '',
      // },
      // {
      //   text: '对象类型',
      //   link: '',
      // },
      {
        text: '类型操作',
        children: [
          // {
          //   text: '从类型创建类型',
          //   link: '',
          // },
          {
            text: '泛型',
            link: '/handbook/generics',
          },
          // {
          //   text: '从类型创建类型',
          //   link: '',
          // },
          // {
          //   text: 'Keyof Type Operator',
          //   link: '',
          // },
          // {
          //   text: 'Typeof Type Operator',
          //   link: '',
          // },
          // {
          //   text: 'Indexed Access Types',
          //   link: '',
          // },
          // {
          //   text: 'Conditional Types',
          //   link: '',
          // },
          // {
          //   text: 'Mapped Types',
          //   link: '',
          // },
          {
            text: 'Template Literal Types',
            link: '/handbook-v2/type-manipulation/template-literal-types',
          },
        ],
      },
      {
        text: 'Classes',
        link: '/handbook/classes',
      },
      // {
      //   text: 'Modules',
      //   link: '',
      // }
    ],
  },
  {
    text: 'Reference',
    children: [
      { text: 'Utility Types', link: '/reference/utility-types' },
      // { text: 'Cheat Sheets', link: '/reference/' },
      { text: 'Decorators', link: '/reference/decorators' },
      { text: 'Declaration Merging', link: '/reference/declaration-merging' },
      { text: 'Enums', link: '/handbook/enums' },
      { text: 'Iterators and Generators', link: '/reference/iterators-and-generators' },
      { text: 'JSX', link: '/reference/jsx' },
      { text: 'Mixins', link: '/reference/mixins' },
      { text: 'Modules', link: '/reference/modules' },
      { text: 'Module Resolution', link: '/reference/module-resolution' },
      { text: 'Namespaces', link: '/reference/namespaces.html' },
      { text: 'Namespaces and Modules', link: '/reference/namespaces-and-modules' },
      { text: 'Symbols', link: '/reference/symbols' },
      { text: 'Triple-Slash Directives', link: '/reference/triple-slash-directives' },
      { text: 'Type Compatibility', link: '/reference/type-compatibility' },
      { text: 'Type Inference', link: '/reference/type-inference' },
      { text: 'Variable Declaration', link: '/reference/variable-declarations' },
    ],
  },
  {
    text: '发布记录',
    children: [
      {
        "text": "typescript-4.5",
        "link": "/release-notes/typescript-4.5"
      },
      {
        "text": "typescript-4.4",
        "link": "/release-notes/typescript-4.4"
      },
      {
        "text": "typescript-4.3",
        "link": "/release-notes/typescript-4.3"
      },
      {
        "text": "typescript-4.2",
        "link": "/release-notes/typescript-4.2"
      },
      {
        "text": "typescript-4.1",
        "link": "/release-notes/typescript-4.1"
      },
      {
        "text": "typescript-4.0",
        "link": "/release-notes/typescript-4.0"
      },
      {
        "text": "typescript-3.9",
        "link": "/release-notes/typescript-3.9"
      },
      {
        "text": "typescript-3.8",
        "link": "/release-notes/typescript-3.8"
      },
      {
        "text": "typescript-3.7",
        "link": "/release-notes/typescript-3.7"
      },
      {
        "text": "typescript-3.6",
        "link": "/release-notes/typescript-3.6"
      },
      {
        "text": "typescript-3.5",
        "link": "/release-notes/typescript-3.5"
      },
      {
        "text": "typescript-3.4",
        "link": "/release-notes/typescript-3.4"
      },
      {
        "text": "typescript-3.3",
        "link": "/release-notes/typescript-3.3"
      },
      {
        "text": "typescript-3.2",
        "link": "/release-notes/typescript-3.2"
      },
      {
        "text": "typescript-3.1",
        "link": "/release-notes/typescript-3.1"
      },
      {
        "text": "typescript-3.0",
        "link": "/release-notes/typescript-3.0"
      },
      {
        "text": "typescript-2.9",
        "link": "/release-notes/typescript-2.9"
      },
      {
        "text": "typescript-2.8",
        "link": "/release-notes/typescript-2.8"
      },
      {
        "text": "typescript-2.7",
        "link": "/release-notes/typescript-2.7"
      },
      {
        "text": "typescript-2.6",
        "link": "/release-notes/typescript-2.6"
      },
      {
        "text": "typescript-2.5",
        "link": "/release-notes/typescript-2.5"
      },
      {
        "text": "typescript-2.4",
        "link": "/release-notes/typescript-2.4"
      },
      {
        "text": "typescript-2.3",
        "link": "/release-notes/typescript-2.3"
      },
      {
        "text": "typescript-2.2",
        "link": "/release-notes/typescript-2.2"
      },
      {
        "text": "typescript-2.1",
        "link": "/release-notes/typescript-2.1"
      },
      {
        "text": "typescript-2.0",
        "link": "/release-notes/typescript-2.0"
      },
      {
        "text": "typescript-1.8",
        "link": "/release-notes/typescript-1.8"
      },
      {
        "text": "typescript-1.7",
        "link": "/release-notes/typescript-1.7"
      },
      {
        "text": "typescript-1.6",
        "link": "/release-notes/typescript-1.6"
      },
      {
        "text": "typescript-1.5",
        "link": "/release-notes/typescript-1.5"
      },
      {
        "text": "typescript-1.4",
        "link": "/release-notes/typescript-1.4"
      },
      {
        "text": "typescript-1.3",
        "link": "/release-notes/typescript-1.3"
      },
      {
        "text": "typescript-1.1",
        "link": "/release-notes/typescript-1.1"
      }
    ]
  },
]

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-cn',
  title: 'TypeScript中文手册',
  description: 'TS中文手册',
  base: '/typescript-zh-cn/',

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
    repo: 'https://github.com/Mario34/typescript-zh-cn',
    sidebarDepth: 3,
    editLink: true,
    editLinkText: '编辑此页',
    docsRepo: 'https://github.com/Mario34/typescript-zh-cn',
    docsBranch: 'dev',
    docsDir: 'zh',
    editLinkPattern: ':repo/edit/:branch/:path',
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