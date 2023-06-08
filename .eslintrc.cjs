module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 用来扩展或继承现有的的配置集合，通常是一些流行的共享规则包
  extends: [
    './eslintrc-auto-import.json', // 此规则是自动按需加载时防止 Eslint 校验不通过
    'airbnb-base', // airbnb 代码风格
    'plugin:vue/vue3-essential', // 使用 eslint-plugin-vue 中 vue3-essential 配置项的规则集合
    'plugin:prettier/recommended', // 使用 eslint-plugin-prettier 中 recommended 配置项的规则集合
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // 使用第三方插件来扩展 Eslint 的功能，如支持对 React、Vue 等框架的语法检查
  plugins: [
    'vue',
  ],
  // 指定代码规则和错误检查方式，键名表示一条规则，对应的键值为规则的配置
  rules: {
    // 规则配置
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 0,
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', '403', '404', '500'], // 需要忽略的组件名
      },
    ],
    // 处理 prettier 和 eslint 冲突的规则
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true,
        semi: true,
      },
    ],
  },
};
