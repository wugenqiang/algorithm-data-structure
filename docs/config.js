const langs = [
    { title: '简体中文', path: '/home', matchPath: /^\/(home|plugin|cli|changelog)/ },
    { title: 'English', path: '/en/', matchPath: /^\/en/ }
]

docute.init({
    // 配置...
    // 项目根目录里的 README.md
    home: './README.md',
    // true 将会默认使用 `landing.html`
    landing: 'landing.html',
    debug: true,

    // slug for your github repo
    repo: 'wugenqiang/algorithm-data-structure',
    // twitter username
    twitter: 'enjoytoshare',
    // the link to source file of current page
    'edit-link': 'https://github.com/wugenqiang/algorithm-data-structure/blob/master/docs/',

    //自定义侧边栏目录
    //toc: './toc.md',

    // 显示 h2 到 h4 的标题
    tocVisibleDepth: 3,
    nav: [
        // 首页
        {title: '首页', path: '/'},
        // 学习笔记
        {
            title: '学习笔记',
            type: 'dropdown',
            items: [
                {title: 'CS-Notes', path: 'https://wugenqiang.github.io/CS-Notes/'},
                {title: '算法笔记', path: 'https://wugenqiang.github.io/algorithm-data-structure/'},
            ]
        },
        // 技术博客
        {
            title: '技术博客',
            type: 'dropdown',
            items: [
                {title: 'CSDN', path: 'https://blog.csdn.net/wugenqiang'},
                {title: 'GitHub', path: 'https://wugenqiang.github.io/'},
            ]
        },
        // 留言板
        {title: '留言板', path: '/notes/contact'},

    ],
    plugins: [

        function valine(context) {
            context.registerComponent('content:end',{
                template: '<div id="vcomments" style="padding: 50px;"></div>',
                mounted: function () {
                    new Valine({
                        el: '#vcomments',
                        appId: "KIlqXsCmzBUnovnvh5ih8mk9-gzGzoHsz",
                        appKey: "e0v6zIg2NGg44PM6MVLa7voo",
                        avatar: 'monsterid',
                        path: window.location.href,
                        placeholder: "你是我一生只会遇见一次的惊喜 ...",
                    })
                }
            })
        },
        evanyou(),
    ]
})