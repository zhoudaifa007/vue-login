import { USER_SIGNIN,USER_SIGNOUT,USER_REG,USER_MARKMSG } from '../types'

var isLoggedIn = function() {
  var token = localStorage.getItem('user');
  if (token) {
      return JSON.parse(localStorage.getItem('user'))
  } else {
    return false;
  }
};

const state = {
  token: isLoggedIn() || null,
  markMsg: null
};

const mutations = {
  [USER_SIGNIN](state, user) {
    localStorage.setItem('user',JSON.stringify(user));
    state.token = user
  },
  [USER_MARKMSG](state,msg) {
    state.markMsg = msg
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
