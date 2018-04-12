<template>
  <div>
    <div class="container">
      <div class="row">
        <h4>Gallery 2</h4>
      </div>
      <div class="row">
        <ul class="list-inline">
          <li v-for="item in pictures" class="box">
            <a :href="item.url" title="">
              <img :src="item.url" alt="">
            </a>
          </li>
        </ul>
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
        msg: '',
        pictures: ''
      }
    },
    created () {
    // this.$store.dispatch()
    this.callApi();
  },
  computed: mapGetters({
    state: 'loginState'
  }),
  methods: {
    callApi() {
      let vm = this;
      let parseString = require('xml2js').parseString;

      // console.log(parseString)
      axios.get(`http://thecatapi.com/api/images/get?format=xml&category=hats&results_per_page=20`)
      .then(response => {
        vm.pictures = response.data;

        var xml = response.data;
        parseString(xml, function (err, result) {
          console.log(result.response.data[0].images[0].image);
          vm.pictures = result.response.data[0].images[0].image;
          // let images = result.response.data[0].images
          // result.map
        });

      })
      .catch(e => {

      })
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
