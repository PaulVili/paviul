<template>
    <div class="relative" >
        <div class="flex flex-row flex-wrap justify-between lg:hidden">
            <a href="#">
                <h1 class="
                                text-5xl 
                                font-bold 
                                mb-5">Paviul</h1>
            </a>
            <div class="flex flex-row">
                <button class=" mr-2 bg-gray-200 p-0 w-9 h-9 rounded-full flex flex-row items-center justify-center">
                    <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                    </svg>
                </button>
                <button class="bg-gray-200  w-9 h-9 rounded-full " @click="toggleMobNav">
                    <svg width="100%" height="16px" class="block" viewBox="0 0 16 16">
                        <path
                            d="M16 13c0 .552-.512 1-1.143 1H1.143C.512 14 0 13.552 0 13s.512-1 1.143-1h13.714c.631 0 1.143.448 1.143 1ZM16 8c0 .552-.512 1-1.143 1H1.143C.512 9 0 8.552 0 8s.512-1 1.143-1h13.714C15.488 7 16 7.448 16 8ZM14.857 4C15.488 4 16 3.552 16 3s-.512-1-1.143-1H1.143C.512 2 0 2.448 0 3s.512 1 1.143 1h13.714Z"
                            fill="currentColor"></path>
                    </svg>
                </button>
            </div>
            
        </div>
        <div class="bg-white fixed p-5 right-3.5 flex flex-col items-center rounded-md" v-if="mobNavOpen">
            <ul>
                <li class="p-2"><a href="#" @click="mobNavOpen = false">Feed</a></li>
                <li class="p-2"><a href="#" @click="mobNavOpen = false">Trending</a></li>
                <li class="p-2"><a href="#" @click="mobNavOpen = false">Browse</a></li>
            </ul>
            <a  
                    @click="toggleconnectWalletShow"
                    href="#"
                    class="
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
                    Connect Wallet</a>
        </div>
        <div class="hidden lg:block">
            <div class="flex flex-row flex-wrap justify-between">
                <a href="/">
                    <h1 class=" 
                        text-5xl 
                        font-bold 
                        mb-5"
                    >Paviul</h1>
                </a>
                <nav class="ml-5 mt-4 flex">
                    <ul class="flex flex-row">
                        <li>
                            <a href="#" class="
                                p-2
                                rounded-3xl 
                                transition ease-in-out delay-150
                                hover:bg-gray-300
                                text-lg
                                ">Feed</a>
                        </li>
                        <li>          
                            <a href="#" 
                            @click="toggleExploreShow"
                            v-on:mouseover="changeExploreShow"
                            class="
                            p-2
                                rounded-3xl 
                                transition ease-in-out delay-150
                                hover:bg-gray-300
                                text-lg
                                ">Explore</a>                  
                            
                            <ul class="bg-white fixed p-3 rounded-3xl top-20" v-show="exploreShow">
                                <li class="transition ease-in-out delay-150 hover:bg-gray-300 p-2 rounded-3xl"><a href="#" >Trending</a></li>
                                <li class="transition ease-in-out delay-150 hover:bg-gray-300 p-2 rounded-3xl"><a href="#">Browse</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div class="mt-2">
                    <input type="text" class="
                        flex-1 
                        rounded-3xl                         
                        mr-10 
                        bg-gray-200 
                        text-center 
                        p-2" 
                        placeholder="Search web3">
                </div>
                <a 
                    href="#"
                    @click="toggleconnectWalletShow"
                    class="
                    hover:translate-y-[-1px]
                    bg-black 
                    w-44 
                    h-10
                    font-bold
                    p-2 
                    shadow-lg 
                    text-base 
                    text-white 
                    rounded-3xl 
                    text-center 
                    block                     
                    ">
                    Connect Wallet</a>
            </div>
            
        </div>
        <transition name="bounce">
            <walletBlock v-if="connectWalletShow" class="fixed inset-1/4 border-solid border-black border-2"/>
        </transition>
        
    </div>
</template>

<script>
import walletBlock from './walletBlock.vue'
export default {
    name: 'Header-component',
    components: {
        walletBlock
    },
    data(){
        return {
            mobNavOpen: false,
            exploreShow: false,
            connectWalletShow: false
        }        
    },
    methods:{
        toggleMobNav(){
            this.mobNavOpen = !this.mobNavOpen;
        },
        toggleExploreShow(){
            this.exploreShow = !this.exploreShow;
        },
        toggleconnectWalletShow(){
            this.connectWalletShow = !this.connectWalletShow;
            this.mobNavOpen = false;
        },
        changeExploreShow(){
            this.exploreShow = !this.exploreShow;
        }
    }
}
</script>

<style scoped> 
.bounce-enter-active {
  animation: bounce-in .5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>