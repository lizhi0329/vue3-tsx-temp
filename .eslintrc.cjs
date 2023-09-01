module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    // "eslint:recommended",
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
    // './.eslintrc-auto-import.json'
    // "eslint-config-prettier"
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off', // 禁用vue文件强制多个单词命名
    '@typescript-eslint/no-explicit-any': ['off'], //允许使用any
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowedNames: ['that'] // this可用的局部变量名称
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'off', //允许使用@ts-ignore
    '@typescript-eslint/no-non-null-assertion': 'off', //允许使用非空断言
    'no-console': [
      //提交时不允许有console.log
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    'no-debugger': 'warn' //提交时不允许有debugger
  }
}
