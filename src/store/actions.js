import api from '../api'
import { USER_SIGNIN,USER_SIGNOUT,USER_REG,USER_MARKMSG } from './types'

export const UserLogin = ({ commit }, data) => {
  api.localLogin(data).then(function (response) {
    if( response.data.code == 200) {
      const token = {"token":"123456"}
      commit(USER_SIGNIN, token);
      window.location = '/person'
    }else{
      window.location = '/login'
    }
  })
    .catch(function (error) {
      console.log(error);
    });
};

export const GetMarkMsg = ({ commit }) => {
  api.getMarkMsg().then(function (response) {
    if( response.data.code == 200) {
      commit(USER_MARKMSG, JSON.stringify(response.data.result.list[0].markMsg));
    }
  })
    .catch(function (error) {
      console.log(error);
    });
};

export const UserLogout = ({ commit }, data) => {
  api.localLogout(data).then(function (response) {
    commit(USER_SIGNOUT);
    window.location = '/login'
  })
    .catch(function (error) {
      console.log(error);
    });
};

export const UserReg = ({ commit }, data) => {
  api.localReg(data).then(function (response) {
    if( response.data.type == true) {
      commit(USER_REG, response.data.token);
      window.location = '/person'
    }
  })
  .catch(function (error) {
    console.log(error);
  });
};


