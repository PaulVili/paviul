<template>
    <div>
        <Header v-if="!authorize"></Header>
        <HeaderAuthorized v-if="authorize"></HeaderAuthorized>
        <a href="/drops ">
            <div class="flex flex-col items-center">
                <h2 class="text-3xl sm:text-5xl  mb-10">
                    Introducing drops
                </h2>
                <p class="font-bold mb-10 text-5xl md:text-7xl flex flex-col sm:flex-row "> A new <span class=" hover:translate-y-[-1px] mt-2 sm:ml-2 sm:text-center text-purple-600 bg-fuchsia-200 p-2 rounded-3xl">way</span> to <span class="hover:translate-y-[-1px] sm:ml-2 text-center p-2  bg-amber-300 text-slate-400 rounded-3xl">create</span></p>
                <button class="
                    hover:translate-y-[-1px]
                    bg-black 
                    w-44 
                    h-10
                    font-bold
                    p-2 
                    shadow-lg 
                    hover:shadow-cyan-500/50 
                    text-base 
                    text-white 
                    rounded-3xl 
                    text-center 
                    block ">
                    Learn more
                </button>
            </div>            
        </a>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import HeaderAuthorized from '@/components/HeaderAuthorized.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'HomePage',
    components: {
        Header, 
        Footer,
        HeaderAuthorized
    },
    data(){
        return {
            authorize: true
        }
  }

}
</script>

<style>

</style>