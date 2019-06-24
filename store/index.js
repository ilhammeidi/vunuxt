import languages from '~/static/lang/languages'

export const state = () => ({
  counter: 0,
  langs: languages,
  darkMode: false
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  switchMode(state) {
    state.darkMode = !state.darkMode
  }
}
export const getters = {
  getDir: state => locale => {
    let currentLang = state.langs.find(lang => lang.code === locale)
    return currentLang.dir
  }
}
