<template lang="pug">
  #app
    img(src="./assets/logo.png")
    img(src="/public/logo-48.png")
    transition(name="fade", mode="out-in")
      router-view.view
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapGetters('i18n', ['locale'])
    },
    watch: {
      locale () {
        this.$i18n.locale = this.locale
      }
    },
    methods: {
      ...mapActions('i18n', ['setLang'])
    },
    created () {
      this.$i18n.locale = this.locale
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>