import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);

var instance = axios.create();
if(localStorage.getItem('user')) {
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/(^\")|(\"$)/g, '');
}

export default {
  localLogin: function (data) {
    return Vue.axios.post('http://10.133.146.41:80/v1/market/service/logintest',data)
  },
  localLogout: function (data) {
    return instance.post('http://localhost:80/api/logout',data)
  },
  localReg: function (data) {
    return Vue.axios.post('/api/reg',data)
  },
  getMarkMsg: function () {
    return Vue.axios.get('http://10.133.146.41/v1/market/service/get/mark')
  }
}

