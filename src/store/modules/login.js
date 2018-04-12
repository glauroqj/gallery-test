import axios from 'axios';
// initial state
const state = {
  all: {
    pictures: ''
  }
}

// getters
const getters = {
  actualState: state => state.all
}

// actions
const actions = {
  callApiAction(state, param) {
    var vm = this;
    let parseString = require('xml2js').parseString;
    let newURL = 'http://thecatapi.com/api/images/get?format='+param.format+'&category='+param.category+'&results_per_page='+param.size

    axios.get(newURL) 
    .then(response => {
     let xml = response.data;
     parseString(xml, function (err, result) {
        // console.log(result.response.data[0].images[0].image);
        let payload = result.response.data[0].images[0].image;
        vm.commit('callApiMutation', payload)
      });
   })
    .catch(e => {})

  }
}

// mutations
const mutations = {
  callApiMutation(state, payload) {
    state.all.pictures = payload;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}