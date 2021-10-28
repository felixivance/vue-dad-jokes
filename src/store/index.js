import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        currentJoke:'This is a very serious joke',
        allJokes:[]
    },
    mutations:{
        //syncronous
        setCurrentJoke(state, payload){
            state.currentJoke = payload
            state.allJokes.push(payload)
        }
    },
    actions:{
        //
    },
    modules:{

    },
    getters:{
        getCurrentJoke(state){
            return state.currentJoke;
        }
    }
})