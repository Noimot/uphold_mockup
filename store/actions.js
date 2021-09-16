let actions = {
  async loadSettings({commit}){
    return this.$content('settings').fetch()
    .then(data => {commit('GET_SETTINGS', data)})
  }
}

export default actions;