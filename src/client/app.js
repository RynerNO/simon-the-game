import Vue from 'vue'
import Main from '@pages/Main.vue';
import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(Main)
})