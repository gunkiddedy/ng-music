const actions = {
  fetchContent({ commit, getters }, payload) {
    commit('SET_PARAM', payload)
    const param = payload || getters.getParam
    return new Promise((resolve, reject) => {
      const api = `https://itunes.apple.com/search?entity=song&limit=5&term=${param}`
      this.$axios.$get(api).then(res => {
        commit('SET_CONTENT', res)
        resolve(res); 
      }, error => {
        reject(error);
      })
    })
  },
}

export default actions
