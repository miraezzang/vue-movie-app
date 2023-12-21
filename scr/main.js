import { createApp } from 'vue'
import App from './App'
import router from './routes/index.js'
import store from './store'
import loadImage from './plugins/loadImage.js'

createApp(App)
  .use(router) // $route, $router
  .use(store) // $store
  .use(loadImage) //$loadImage
  .mount('#app')
