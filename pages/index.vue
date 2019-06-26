<template>
  <section
    :class="{ 'custom-font': getDir($i18n.locale)==='rtl' }"
    class="container">
    <div>
      <logo/>

      <h1
        :class="{ 'custom-font': getDir($i18n.locale)==='rtl' }"
        class="title"
      >
        <span class="deco">dasdads</span>
        {{ $t('home_page.app_name') }}
      </h1>
      <h2 class="subtitle">
        {{ $t('home_page.app_desc') }}
      </h2>
      <p class="subtitle">{{ $t('welcome') }}</p>
      <p
        class="subtitle"
        @click="increment">
        {{ counter }}
      </p>
      <NuxtLink to="/inspire">
        Go to inspire
      </NuxtLink>
      <v-btn
        flat 
        icon
        color="secondary"
        @click="switchMode"
      >
        <v-icon>cached</v-icon>
      </v-btn>
      <div class="links">
        <nuxt-link
          v-for="locale in $i18n.locales"
          v-if="locale.code !== $i18n.locale"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          style="padding: 0.5em"
          @click.native="changeDir(locale.code)">{{ locale.name }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
  components: {
    Logo
  },
  data() {
    return {
      test: 'test'
    }
  },
  computed: {
    ...mapState(['counter', 'darkMode']),
    ...mapGetters(['getDir'])
  },
  watch: {},
  methods: {
    changeDir(locale) {
      if (locale === 'fa') this.$vuetify.rtl = true
      else this.$vuetify.rtl = false
    },
    ...mapMutations(['increment', 'switchMode'])
  }
}
</script>

<style lang="scss" scoped>
@import './style';
</style>
