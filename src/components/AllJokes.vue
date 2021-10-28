<template>
    <div>
        <div class="home shadow-xl bg-gray-200 w-8/12 mx-auto p-20 rounded-md">
            <h2 class="text-xl text-blue-600 font-extrabold">All Viewed Jokes</h2>
            <div v-for="(joke,i) in jokes" :key="i" class="text-justify" >
                <h3 class="text-3xl text-black pt-5 pb-5"> {{i+1}}. {{joke}}</h3>
            </div>
           

           

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },

    computed:{
        jokes(){
            return this.$store.getters.getAllJokes
        }
    },
    mounted(){
       
    }
}
</script>