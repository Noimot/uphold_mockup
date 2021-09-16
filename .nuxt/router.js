import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f6aead8a = () => interopDefault(import('..\\node_modules\\@nuxtjs\\svg-sprite\\lib\\pages\\icons-list.vue' /* webpackChunkName: "" */))
const _471fbb12 = () => interopDefault(import('..\\pages\\activity.vue' /* webpackChunkName: "pages/activity" */))
const _237f3da1 = () => interopDefault(import('..\\pages\\integration.vue' /* webpackChunkName: "pages/integration" */))
const _7c82f484 = () => interopDefault(import('..\\pages\\markets.vue' /* webpackChunkName: "pages/markets" */))
const _6bcac450 = () => interopDefault(import('..\\pages\\more.vue' /* webpackChunkName: "pages/more" */))
const _40bde542 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/_icons",
    component: _f6aead8a,
    name: "icons-list"
  }, {
    path: "/activity",
    component: _471fbb12,
    name: "activity"
  }, {
    path: "/integration",
    component: _237f3da1,
    name: "integration"
  }, {
    path: "/markets",
    component: _7c82f484,
    name: "markets"
  }, {
    path: "/more",
    component: _6bcac450,
    name: "more"
  }, {
    path: "/",
    component: _40bde542,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
