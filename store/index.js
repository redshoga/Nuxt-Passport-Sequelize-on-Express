export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER: function(state, user) {
    state.authUser = user
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.passport && req.session.passport.user) {
      commit('SET_USER', req.session.passport.user)
    }
  }
}
