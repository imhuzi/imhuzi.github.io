module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'Im胡子 ！',
  description: '一个懂产品的程序员',
  home: '/',
  plugins: [
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
  ],
  // 主题和它的配置
  theme: "vuepress-theme-gungnir",
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbarTitle: "$ cd /imhuzi/",
    docsDir: "docs",
    // navbar: [
    //   // NavbarItem
    //   {
    //     text: 'Foo',
    //     link: '/foo/',
    //   },
    //   // NavbarGroup
    //   {
    //     text: 'Group',
    //     children: ['/group/foo.md', '/group/bar.md'],
    //   },
    //   // 字符串 - 页面文件路径
    //   '/bar/README.md',
    // ],
    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: "Huzi Wang",

      // 必须：头像，将在首页和移动端侧边栏显示
      avatar: "/img/avatar.jpeg",

      // 必须：个人简介，将在首页显示
      description: "🤯 > /dev/null ",
      
      // 可选：社交平台账号，将在首页和移动端侧边栏显示
      sns: {
        github: "imhuzi",  // Github
        // linkedin: "xiaohan-zou-55bba0160",  // 领英
        // facebook: "renovamen.zou",  // Facebook
        // twitter: "renovamen_zxh",  // 推特
        // zhihu: "chao-neng-gui-su",  // 知乎
        // weibo: "your-weibo-id",  // 新浪微博
        email: "imhuzi.wh@gmail.com",  // 邮箱
        rss: "/rss.xml",  // RSS 文件的链接
        // 添加其他的社交平台
        // bilibili: {  // 随便什么名字
        //   icon: "ri-bilibili-line",  // 社交平台的图标
        //   link: "https://www.bilibili.com/"  // 主页链接
        // }
        // ...
      }
    },
    homeHeaderImages: [
      {
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
  
   },
   
}