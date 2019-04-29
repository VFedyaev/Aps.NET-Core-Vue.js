// Vue imports
import Vue from 'vue'
import Router from 'vue-router'

// 3rd party imports
import Auth from '@okta/okta-vue'

// our own imports
import Hello from '@/components/Hello'

import FoodRecords from '@/components/FoodRecords'

Vue.use(Auth, {
  issuer: 'https://dev-550037.okta.com/oauth2/default',
  client_id: '{0oaim0nxh27tWfZKz356}',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'pnevma-222@mail.ru'
})

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
  {
    path: '/implicit/callback',
    component: Auth.handleCallback()
  },
  {
  	path: '/',
  	name: 'Hello',
  	component: Hello
	},
  {
    path: '/food-records',
    name: 'FoodRecords',
    component: FoodRecords,
    meta: {
      requiresAuth: true
    }
  },
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router