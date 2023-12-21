module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    //vue
    //'plugin:vue/vue3-essential', //Lv.1
    'plugin:vue/vue3-strongly-recommended',//Lv.2
    //'plugin:vue/vue3-recommended',//Lv.3
    //js
    'eslint:recommended'
  ],
  parserOpstions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    
  }
}