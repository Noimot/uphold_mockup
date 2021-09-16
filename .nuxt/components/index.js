export { default as Activity } from '../..\\components\\Activity.vue'
export { default as Balance } from '../..\\components\\Balance.vue'
export { default as CryptoCurrency } from '../..\\components\\CryptoCurrency.vue'
export { default as Currencies } from '../..\\components\\Currencies.vue'
export { default as Currency } from '../..\\components\\Currency.vue'
export { default as DashboardItems } from '../..\\components\\DashboardItems.vue'
export { default as IntegrationPage } from '../..\\components\\IntegrationPage.vue'
export { default as Market } from '../..\\components\\Market.vue'
export { default as Markets } from '../..\\components\\Markets.vue'
export { default as More } from '../..\\components\\More.vue'
export { default as Navigation } from '../..\\components\\Navigation.vue'
export { default as NavigationMobile } from '../..\\components\\NavigationMobile.vue'
export { default as NuxtLink } from '../..\\components\\NuxtLink.vue'
export { default as Portfolio } from '../..\\components\\Portfolio.vue'
export { default as Profile } from '../..\\components\\Profile.vue'
export { default as Sparklines } from '../..\\components\\Sparklines.vue'
export { default as Textarea } from '../..\\components\\Textarea.vue'
export { default as TheSidebar } from '../..\\components\\TheSidebar.vue'
export { default as ThirdPartyApp } from '../..\\components\\ThirdPartyApp.vue'
export { default as ThirdpartyAppsPage } from '../..\\components\\ThirdpartyAppsPage.vue'
export { default as TransactionHistory } from '../..\\components\\TransactionHistory.vue'
export { default as TransactionPreview } from '../..\\components\\TransactionPreview.vue'
export { default as Transactions } from '../..\\components\\Transactions.vue'
export { default as TransactionWrapper } from '../..\\components\\TransactionWrapper.vue'
export { default as WrapperPage } from '../..\\components\\WrapperPage.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
