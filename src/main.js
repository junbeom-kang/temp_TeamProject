import Vue from 'vue'
import App from './App.vue'
import router from './routes'; //설정 라우터 호출
//import {router}  from './routes/index.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'


Vue.use(BootstrapVue)
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App)
  ,router,               //뷰에 설정
  rules: {
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  }

}).$mount('#app')

