import { USER_SIGNIN,USER_SIGNOUT,USER_REG } from '../types'

var isLoggedIn = function() {
  var token = localStorage.getItem('user');
  if (token) {
      return JSON.parse(localStorage.getItem('user'))
  } else {
    return false;
  }
};

const state = {
  token: isLoggedIn() || null
};

const mutations = {
  [USER_SIGNIN](state, user) {
    localStorage.setItem('user',JSON.stringify(user));
    state.token = user
  },
  [USER_SIGNOUT](state) {
    localStorage.removeItem('user');
    state.token = null;
  },
  [USER_REG](state, user) {
    localStorage.setItem('user',JSON.stringify(user));
    state.token = user
  }
}

export default {
  state,
  mutations
}
