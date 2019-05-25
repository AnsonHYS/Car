
// import Vue from 'vue'
// import Axios from 'axios';
import authlist from "../../api/authlist.js"


//getter 
const state = {
    user: sessionStorage.getItem('USER'),
    role: sessionStorage.getItem('ROLE'),
    router: []
}
//getter 抛出去的数据
const getters = {
    user: state => {
        return state.user;
    },
    role: state => {
        return state.role
    },
    router: state => {
       
        return state.router;
    },
}



const actions = {
    Logins({ commit }, obj) {

        return new Promise((resolve, reject) => {
            let data = {};
            authlist.map(function (item) {
                console.log(obj.user + " " + item.user);
                if (obj.user == item.user) {
                    commit('SET_USER', item.user);  //将username和role进行存储
                    sessionStorage.setItem('USER', item.user); //存入 session 
                    commit('SET_ROLE', item.role);  //将username和role进行存储
                    sessionStorage.setItem('ROLE', item.role); //存入 session 
                    return data = { user: item.user, role: item.role };
                } else {
                    return data;
                }
            })
            resolve(data);

        }).catch(error => {

            reject(error);
        })
    },
    Logouts({ commit, state }) {
        return new Promise((resolve, reject) => {
            commit('SET_USER', "");  //将username和role进行存储
            sessionStorage.setItem('USER', ""); //存入 session 
            commit('SET_ROLE', "");  //将username和role进行存储
            sessionStorage.setItem('ROLE', ""); //存入 session 
            location.reload();
            resolve();
        }).catch(error => {
            reject(error);
        })
    },
    Routers({ commit }, newrouter) {

        return new Promise((resolve, reject) => {
             
            commit('SET_ROUTER', newrouter); //存储最新路由
            resolve(newrouter);
        }).catch(error => {
            reject(error);
        });
    }
}

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_ROLE(state, role) {
        state.role = role;
    },
    SET_ROUTER(state, router) {
        state.router = router;
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
} 
