<template>
<div class="h-screen hidden lg:block shadow-lg relative w-72">
    <div class="bg-white bg-opacity-20 backdrop-blur-md drop-shadow-lg h-full dark:bg-gray-700">
        <div class="flex items-center justify-center pt-6">
            <img src="../assets/logo.png" alt="logo">
        </div>
        <nav class="mt-6">
            <div>
                <router-link to="/">
                <div class="w-full uppercase text-purple-600 flex items-center p-4 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-purple-100  dark:from-gray-700 dark:to-gray-800 border-r-4 border-purple-700"> 
                    <span class="mx-4 text-sm font-normal">
                        Home
                    </span>
                </div>
                </router-link> 
                <router-link to="/explore">
                <div class="w-full uppercase text-purple-600 flex items-center p-4 transition-colors duration-200 justify-start dark:from-gray-700 dark:to-gray-800"> 
                    <span class="mx-4 text-sm font-normal">
                        Explore
                    </span>
                </div>
                </router-link> 
                <router-link to="/country">
                <div class="w-full uppercase text-purple-600 flex items-center p-4 transition-colors duration-200 justify-start dark:from-gray-700 dark:to-gray-800">  
                    <span class="mx-4 text-sm font-normal">
                        Country tracks
                    </span>
                </div>
                </router-link> 
                <router-link to="/lyrics">
                <div class="w-full uppercase text-purple-600 flex items-center p-4 transition-colors duration-200 justify-start dark:from-gray-700 dark:to-gray-800"> 
                    <span class="mx-4 text-sm font-normal">
                        Lyrics
                    </span>
                </div>
                </router-link>
            </div>
        </nav>
    </div>
</div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

a.router-link-exact-active {
  color: #42b983;
}
</style>