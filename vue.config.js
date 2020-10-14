module.exports = {
    pages: {
        index: {
            entry: 'src/module/index/main.js',
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '隧道 FastTunnel|免费内网穿透|家中建站|NAT穿透|花生壳|FRP|ngrok',
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        console: {
            entry: 'src/module/console/main.js',
            title: '隧道 控制台',
            // chunks: ['chunk-vendors', 'chunk-common', 'console']
        }
    },
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'element-ui': 'ELEMENT'
        }
    }
}