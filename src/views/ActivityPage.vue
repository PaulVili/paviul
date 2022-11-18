<template>  
  <div>
        <HeaderAuthorized />
        <div class="min-h-[500px] pt-28 flex flex-col items-center">
            <h2 class="text-center text-5xl font-bold mb-5">No live activity</h2>
            <p class="text-center text-xl mb-5">Your live auctions and offers will show up here.</p>
            <a 
                    href="#"
                    class="
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
                    block                     
                    ">
                    Explore NFTs</a>
        </div>
        <Footer />
    </div> 
</template>

<script>
import HeaderAuthorized from '@/components/HeaderAuthorized.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'ActivityPage',
    components: {
        HeaderAuthorized,
        Footer
    }
}
</script>

<style>

</style>