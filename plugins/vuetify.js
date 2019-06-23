import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  rtl: true,
  theme: {
    primary: colors.lime,
    secondary: colors.amber.darken3,
    accent: colors.amber.darken3,
    error: '#79b9c6'
  },
  iconfont: 'fa'
})
