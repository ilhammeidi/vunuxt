import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  rtl: true,
  theme: {
    primary: {
      base: colors.blue.base,
      lighten4: colors.blue.lighten4,
      darken3: colors.blue.lighten3
    },
    secondary: {
      base: colors.lightGreen.base,
      lighten4: colors.lightGreen.lighten1,
      darken3: colors.lightGreen.lighten3
    },
    accent: colors.amber.darken3,
    error: '#79b9c6'
  },
  iconfont: 'fa'
})
