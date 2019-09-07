import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.filter("depart", (str) => {
  if (str == "office") return "策划部";
  else if (str == "echo") return "One Echo";
  else if (str == "bird") return "雁祉作坊";
  else if (str == "media") return "媒体部";
  else if (str == "editor") return "编辑部";
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')