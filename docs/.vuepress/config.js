module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Im胡子 ！',
    description: '一个懂产品的程序员',
    home: '/',
    plugins: [
      [
        "@renovamen/vuepress-plugin-rss", {
          siteURL: "imhuzi.github.io",  // 网站链接 （必须）
          title: "Im胡子的知识库",  // 网站标题（可选，默认：`themeConfig.title`）
          description: "一个懂产品的程序员知识库",  // 网站描述（可选，默认：""）
          copyright: "Renovamen 2011-2022",  // 版权信息（可选，默认：""）
          count: 20,  // 需要在生成的 RSS 文件上显示多少篇文章（可选，默认：20）
          filter: (page) => true  // 文章筛选函数（可选，默认：(page) => true）
        }
      ],
      [
        "@renovamen/vuepress-plugin-mermaid"
      ],
      [
        "vuepress-plugin-giscus", {
          repo: "imhuzi/imhuzi.github.io",  // 必须，string，格式：user_name/repo_name
          repoId: "R_kgDOHLmVFA",  // 必须，string，在 Giscus 官网上生成
          category: "Q&A",  // 必须，string
          categoryId: "DIC_kwDOHLmVFM4COlvn",  // 必须，string，在 Giscus 官网上生成
          // mapping: "[页面 <-> discussion 映射]",  // 可选，string，default="title"
          // reactionsEnabled: "[是否启用 reaction]",  // 可选，boolean，default=true
          // theme: "light", // 可选，string，default="light"
          inputPosition: "top",
          // lang: "cn",  // 可选，string，default="auto"（跟随网站语言，如果 Giscus 不支持你的网站的语言，则会使用 "en"）
          lazyLoad: true,  // 可选，boolean，default=false（如果设为 true，Giscus 的加载将延迟到用户滚动到评论容器附近）
          crossorigin: "anonymous"  // 可选，string，default="anonymous"
        }
      ],
      [
        "@renovamen/vuepress-plugin-md-plus", {
          footnote: true,  // 脚注
          mark: true  // 高亮标记
        }
      ]
    ],
    // 主题和它的配置
    theme: "vuepress-theme-gungnir",
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        navbarTitle: "$ cd /imhuzi/",
        // docsDir: "docs",
        navbar: [
          {
            text: "首页",
            link: "/",
            // icon: "fa-fort-awesome"
          },
          {
            text: "标签",
            link: "/tags/",
            // icon: "fa-tag"
          },
          {
            text: "GitHub",
            link: "https://github.com/imhuzi",
            // icon: "FaGithubAlt"
          },
          // {
          //   text: "文档",
          //   link: "/zh/docs/basic/intro.md",
          //   icon: "ri-book-2-fill"
          // },
        ],
        sidebar: {},
        personalInfo: {
            // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
            name: "Huzi Wang",

            // 必须：头像，将在首页和移动端侧边栏显示
            avatar: "/img/avatar.png",

            // 必须：个人简介，将在首页显示
            description: "🤯 > /dev/null ",

            // 可选：社交平台账号，将在首页和移动端侧边栏显示
            sns: {
                github: "imhuzi", // Github
                // linkedin: "xiaohan-zou-55bba0160",  // 领英
                // facebook: "renovamen.zou",  // Facebook
                // twitter: "renovamen_zxh",  // 推特
                // zhihu: "chao-neng-gui-su",  // 知乎
                // weibo: "your-weibo-id",  // 新浪微博
                email: "imhuzi.wh@gmail.com", // 邮箱
                rss: "/rss.xml", // RSS 文件的链接
                // 添加其他的社交平台
                // bilibili: {  // 随便什么名字
                //   icon: "ri-bilibili-line",  // 社交平台的图标
                //   link: "https://www.bilibili.com/"  // 主页链接
                // }
                // ...
            }
        },
        // 首页背景图
        homeHeaderImages: [{
                path: "/img/home-bg/1.jpg",
                mask: "rgba(40, 57, 101, .4)"
            },
            {
                path: "/img/home-bg/2.jpg",
                mask: "rgb(251, 170, 152, .2)"
            },
            {
                path: "/img/home-bg/3.jpg",
                mask: "rgba(68, 74, 83, .1)"
            },
            {
                path: "/img/home-bg/4.jpg",
                mask: "rgba(19, 75, 50, .2)"
            },
            {
                path: "/img/home-bg/5.jpeg",
                mask: "rgba(19, 75, 50, .2)"
            }

        ],
        postNumPerPage: 20, // 可选：每页的博客数量，默认：10
        pages: {
            // 标签页配置
            tags: {
                // 可选：标签页副标题
                subtitle: '吼哇朋友们，这里可以按标签筛选',

                // 可选：标签页封面图路径和蒙版
                bgImage: {
                    path: '/img/pages/tags.jpg',
                    mask: 'rgba(211, 136, 37, .5)'
                }
            },

            // 链接页配置
            links: {
                // 可选：链接页副标题
                subtitle: '吼哇朋友们，这是链接页',

                // 可选：链接页封面图路径和蒙版
                bgImage: {
                    path: '/img/pages/links.jpg',
                    mask: 'rgba(64, 118, 190, 0.5)'
                }
            }
        },
        // hitokoto 项设置为 true 可以开启首页的一言气泡，将鼠标悬浮在头像上气泡就会显示出来
        hitokoto: true,
        hitokoto: "https://v1.hitokoto.cn?c=i",
        footer: `
      &copy; <a href="https://github.com/imhuzi" target="_blank">Im胡子</a> 2011-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
    },

}