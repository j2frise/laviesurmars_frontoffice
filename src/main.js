
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router'

// Import Helpers for filters
import { domain, count, prettyDate, pluralize } from './filters'
import anime from 'animejs/lib/anime.min.js';

//Use with $anime
Vue.prototype.$anime = anime; 

// Import Install and register helper items
Vue.filter('count', count)
Vue.filter('domain', domain)
Vue.filter('prettyDate', prettyDate)
Vue.filter('pluralize', pluralize)

Vue.use(VueRouter)

var router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})


// Check local storage to handle refreshes
if (window.localStorage) {
  var localUserString = window.localStorage.getItem('user') || 'null'
  var localChapitreString = window.localStorage.getItem('chapitre') || 'null'
  var localArticleString = window.localStorage.getItem('article') || 'null'
  var localUser = JSON.parse(localUserString)
  var localChapitre = JSON.parse(localChapitreString)
  var localArticle= JSON.parse(localArticleString)

  if (localUser && store.state.user !== localUser) {
    store.commit('SET_USER', localUser)
  }
  if (localChapitre && store.state.chapitre !== localChapitre) {
    store.commit('SET_CHAPITRE', localChapitre)
  }
  if (localArticle && store.state.article !== localArticle) {
    store.commit('SET_ARTICLE', localArticle)
  }
}

sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
