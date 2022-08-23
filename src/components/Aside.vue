<template>
<div class="h-screen hidden lg:block shadow-lg relative w-80">
    <div class="bg-white bg-opacity-20 backdrop-blur-md drop-shadow-lg h-full overflow-auto dark:bg-gray-700">
        <div class="flex items-center justify-center pt-6">
            <h2>Top artists by monthly listeners</h2>
        </div>
        <nav class="mt-6">
            <div>
                <router-link to="/" v-for="(artist,index) in topArtists" :key="index">
                <div class="w-full uppercase text-purple-600 flex flex-row justify-between items-center p-4 transition-colors duration-200  bg-gradient-to-r from-white to-purple-100  dark:from-gray-700 dark:to-gray-800 border-b-2 border-purple-700"> 
                    <span class="mx-4 text-xs font-normal">
                        {{artist.rank}}
                    </span>
                    <span class="mx-4 text-xs font-normal">
                        {{artist.artist}}
                    </span>
                    <span class="mx-4 text-xs font-normal">
                        {{artist.monthlyListeners}}M
                    </span>
                </div>
                </router-link> 
            </div>
        </nav>
    </div>
</div>
</template>

<script>
import TopArtistsMixin from '@/mixins/TopArtistsMixin.vue';

export default {
    name: 'Aside',
    mixins:[TopArtistsMixin],
    data(){
        return {
            topArtists:null
        }
    },
    mounted() {
        this.getTopArtits()
        .then( res => {
            this.topArtists = res.data
        })
    },
}
</script>

<style>

</style>