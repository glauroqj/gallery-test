<template>
  <div id="app">
    <loading :loading="state"></loading>
    <router-view v-if="!state.showLoading"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import loading from '@/components/loading.vue';

export default {
  name: 'Skeleton',
  components: {
    loading
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  created () {
    var vm = this;
    setTimeout(()=> {
      vm.$store.dispatch('removeLoadingAction')
    }, 1500);
  },
  computed: mapGetters({
    state: 'loadingState'
  })
}
</script>

<style>
@import './assets/css/main.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>