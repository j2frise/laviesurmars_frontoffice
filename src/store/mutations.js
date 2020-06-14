export default {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_CHAPITRE (state, chapitre) {
    state.email = chapitre
  },
  SET_ARTICLE (state, article) {
    state.article = article
  }
}
