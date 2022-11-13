const path = require('path')
const CracoLessPlugin = require('craco-less')

module.exports = {
  webpack: {
    //webpack配置
    // 配置别名
    alias: {
      //设置别名是为了让后续引用的地方减少路径的复杂度
      '@': path.resolve('src'),
      '@utils': path.resolve('src/utils'),
    },
  },
  babel: {
    //支持装饰器
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css', //设置为true即是less 这里用的是css
        },
      ],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'orange' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
