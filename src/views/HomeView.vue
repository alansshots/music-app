<template>
  <div class="home w-8/12">
    <div class="tracks-container h-screen no-bar overflow-scroll flex flex-row justify-between items-center flex-wrap">
    
      <div class="flex flex-col max-w-full h-max m-4 rounded-xl shadow-lg overflow-clip bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup text-white" v-for="(track,index) in topTracks" :key=index>
        <div class="group">
          <div class="absolute justify-center items-center w-72 h-72 bg-black bg-opacity-50 group-hover:flex hidden" 
          @click.prevent="stopAudio(currentAudio), playNewAudio(track.hub.actions[1].uri), currentTrack = track">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
          </div>
          <img alt="" :src=track.images.coverart class="w-72 h-72">
        </div>
        <div class="w-72 h-20 p-4">
          <p class="font-semibold text-md truncate">
            <a class="text-purple-800 hover:text-purple-400">{{track.title}}</a>
          </p>
          <p class="truncate text-sm">
            <a class="text-purple-800 hover:text-purple-400">{{track.subtitle}}</a>
          </p>
        </div>
      </div>

    </div>

    <div v-if="currentTrack" class="absolute h-28 bottom-0 w-8/12 text-purple-800 flex bg-gradient-to-br from-white to-purple-200/5 backdrop-blur-lg rounded-t-3xl">
      <div class="relative flex w-full px-8 sm:px-12 items-center justify-between">
        <div class="flex items-center justify-start w-1/4 md:w-1/2 lg:w-1/3">
          <div class=" hidden sm:block h-16 w-16 mr-4">
            <img :src=currentTrack.images.coverart alt="cover art" class="rounded-full animate-spin-slow">
            </div>
            <div class="w-32 md:w-60 lg:w-52 xl:w-fit">
              <p class="truncate">{{currentTrack.title}}</p>
              <p class="truncate">{{currentTrack.subtitle}}</p>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
            <!-- <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="white" class="hidden sm:block cursor-pointer" style="color: white;" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"></path></svg> -->

            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></svg>
                  
            <svg v-if="audioOn" @click="playAudio(currentAudio), audioOn = false, audioOff = true" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="cursor-pointer" height="45" width="45" xmlns="http://www.w3.org/2000/svg"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path></svg>
            
            
            <svg v-if="audioOff" @click="stopAudio(currentAudio), audioOff = false, audioOn = true" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="cursor-pointer" height="45" width="45" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path></svg>

            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="cursor-pointer" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>
                  
            <!-- <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="white" class="hidden sm:block cursor-pointer" style="color: white;" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"></path><path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"></path></svg>        -->
          </div>       
          <div class="hidden sm:flex flex-row items-center w-full">
            <p>0:47</p>
            <input type="range" step="any" min="0" max="89.977324" class="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg bg-gray-00" value="47.946506"><p>1:29</p>
          </div>
            <audio src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/0d/13/1a/0d131a2c-3497-6b82-2888-0fad0b7aa499/mzaf_15123690966549431974.plus.aac.ep.m4a"></audio>
        </div>
          <div class="hidden lg:flex 2xl:flex items-center justify-end w-1/4 lg:w-1/3">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"></path></svg>
            <input type="range" step="1" min="0" max="99" value="1" @change="volume(currentAudio)" id="vol" class="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2">
         </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMixin from '@/mixins/HomeMixin.vue';

export default {
  name: 'HomeView',
  components: {
  },
  mixins:[HomeMixin],
    data(){
        return {
          topTracks:null,
          currentAudio: null,
          currentTrack:null,
          currentvolume: null,
          audioOn: true,
          audioOff: false,
        }
    },
    methods: {
      playNewAudio(sound) {
        this.currentAudio = new Audio(sound);
        this.currentAudio.play();
        this.audioOff = true
        this.audioOn = false
        // this.currentAudio.volume = this.currentVolume
      },
      playAudio(currentAudio) {
        currentAudio.play();
      },
      stopAudio(currentAudio) {
        if(currentAudio) {
          currentAudio.pause();
        }
      },
      volume(currentAudio){
        this.currentVolume = 0 + '.' + document.querySelector('#vol').value;
        currentAudio.volume = this.currentVolume
      }
    },
    mounted() {
        this.getTopTracks()
        .then( res => {
            this.topTracks = res.data
            console.log(res.data)
        })
    },
}
</script>

<style scoped>
.no-bar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-bar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>