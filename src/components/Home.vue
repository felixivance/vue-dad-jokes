<template>
    <div class="home shadow-xl bg-gray-200 w-8/12 mx-auto p-20 rounded-md">
        <h2 class="text-xl text-blue-600 font-extrabold">Can i have a dad joke?</h2>
        <h3 class="text-3xl text-black pt-5 pb-5">{{joke}}</h3>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-10 focus:outline-none" @click="addJoke()">
            New Joke
        </button>

    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: "Home",
    data() {
        return {
            // joke: ''
        }
    },

    methods:{
        ...mapActions({ addJoke: 'setCurrentJoke' }),

       
        //  ...mapActions([ 'setCurrentJoke' ]),

        // addJoke(){
            
        //     console.log("get new joke clicked");
        //     // this.$store.dispatch('setCurrentJoke');
        //     this.setCurrentJoke();
        // }
    },
 computed:{
        ...mapGetters({joke: "getCurrentJoke"}),
        //or if mapGetters is ...mapGetters(['getCurrentJoke'])

        // joke(){ 
        //     return this.getCurrentJoke;
        // }
        // joke(){
        //     return this.$store.getters.getCurrentJoke;
        // }
    },

    mounted(){
        // this.joke = this.$store.getters.getCurrentJoke;
    }
}
</script>