import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = "https://icanhazdadjoke.com";
const headers = { Accept : 'application/json'}

export default new Vuex.Store({
    state:{
        currentJoke:'',
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
        //asyncronous requests
       async setCurrentJoke(state){
            const joke = await fetch(url, {headers});
            const j = await joke.json();

            state.commit('setCurrentJoke', j.joke);

            //to change an action you do .dispatch to change a mutation is .commit

        }
    },
    modules:{

    },
    getters:{
        getCurrentJoke(state){
            return state.currentJoke;
        }
    }
})