module.exports = {
    pages: {
        index: {
            entry: 'src/module/index/main.js',
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'FastTunnel 免费内网穿透工具',
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        console: {
            entry: 'src/module/console/main.js',
            title: 'FastTunnel 控制台',
            chunks: ['chunk-vendors', 'chunk-common', 'console']
        },
        // callback: {
        //     entry: 'src/module/callback/main.js',
        //     title: '登录中...',
        //     chunks: ['chunk-vendors', 'chunk-common', 'callback']
        // },
        // silent: {
        //     entry: 'src/module/silent/main.js',
        //     title: '登录中...',
        //     chunks: ['chunk-vendors', 'chunk-common', 'silent']
        // },
    }
}