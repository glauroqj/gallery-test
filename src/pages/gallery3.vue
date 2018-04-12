<template>
  <div>
    <div class="container">
      <div class="row">
        <h4>Gallery 3</h4>
      </div>
      <div class="row">
        <ul class="list-inline">
          <li v-for="item in state.pictures" class="box">
            <a :href="item.url" title="">
              <img :src="item.url" alt="">
            </a>
          </li>
        </ul>
<!--           <div v-if="state.message">Gallery DONE</div> -->
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import axios from 'axios';

  export default {
    name: 'login',
    data () {
      return {
      }
    },
    created () {
      let param = {
          size: '50',
          category: 'space',
          format: 'xml'
      };
      this.$store.dispatch('callApiAction', param);
  },
  computed: mapGetters({
    state: 'actualState'
  }),
  methods: {
    callApi(parameters) {

      let vm = this;
      let parseString = require('xml2js').parseString;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {

  }
  .box img {
    height: auto;
    max-width: 40px;
  }
</style>
