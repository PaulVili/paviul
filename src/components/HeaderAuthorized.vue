<template>
    <div class="relative" >
        <div class="flex flex-row flex-wrap justify-between lg:hidden" v-show="!isVisibleSearch" >
            <a href="#">
                <h1 class="    
                    text-4xl           
                    min-[375px]:text-5xl 
                    font-bold 
                    mb-5"
                >
                Paviul</h1>
            </a>
            <div class="flex flex-row">
                <button @click="profileMenuOpen = !profileMenuOpen"
                    class="ml-10 w-9 h-9 mr-2 bg-white flex flex-row align-center justify-around pt-1.5 rounded-full transition ease-in-out delay-50 hover:border-2 border-black border-solid hover:pt-1">
                    <div class="w-6 h-6 p-2 rounded-full"
                        style="background: linear-gradient(135deg, rgb(253, 34, 173), rgb(237, 86, 85))">
                        <img src="">
                    </div>
                </button>
                <button class=" mr-2 bg-gray-200 p-0 w-9 h-9 rounded-full flex flex-row items-center justify-center" @click="toggleVisibleSearchLine">
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
                    @click="mobNavOpen = false"             
                    href="/create"
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
                    Create</a>
        </div>
        <div class="mt-2 w-full flex flex-row bg-gray-100 text-center flex-auto" v-if="isVisibleSearch">
            <input type="text" class="
                        m-auto
                        block
                        w-full
                        rounded-3xl                          
                        text-center 
                        p-2" 
                        placeholder="Search web3"
            >
            <button class="bg-white w-9 h-9 ml-2 rounded-full flex flex-col align-center justify-around" @click="isVisibleSearch = false"><svg width="16px" height="16px" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class><path fill-rule="evenodd" clip-rule="evenodd" d="M2.293 2.293a1 1 0 0 1 1.414 0L8 6.586l4.293-4.293a1 1 0 1 1 1.414 1.414L9.414 8l4.293 4.293a1 1 0 0 1-1.414 1.414L8 9.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L6.586 8 2.293 3.707a1 1 0 0 1 0-1.414Z" fill="currentColor"></path></svg></button>

        </div>
        <div class="hidden lg:block">
            <div class="flex flex-row flex-wrap justify-around">
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
                                transition ease-in-out delay-50
                                hover:bg-gray-300
                                text-lg
                                ">Feed</a>
                        </li>
                        <li>          
                            <a href="#" 
                            @click="toggleExploreShow"
                            @mouseover="changeExploreShow"
                            class="
                            p-2
                                rounded-3xl 
                                transition ease-in-out delay-50
                                hover:bg-gray-300
                                text-lg
                                ">Explore</a>                  
                            
                            <ul class="bg-white fixed p-3 rounded-3xl top-20" v-show="exploreShow">
                                <li class="transition ease-in-out delay-50 hover:bg-gray-300 p-2 rounded-3xl"><a href="#" >Trending</a></li>
                                <li class="transition ease-in-out delay-50 hover:bg-gray-300 p-2 rounded-3xl"><a href="#">Browse</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div class="mt-2">
                    <input type="text" class="
                         
                        rounded-3xl                         
                        mr-10 
                        bg-gray-200 
                        text-center 
                        p-2" 
                        placeholder="Search web3">
                </div>
                <div class="flex flex-row mt-2">
                    <a href="/activity" class="mr-2 p-2 rounded-3xl h-10 block transition ease-in-out delay-50 hover:bg-gray-300 ">Activity</a>
                    <div class="rounded-full w-2 h-2 flex flex-row mt-1">
                        <a href="/notifications"><svg class=" rounded-full bg-white transition ease-in-out delay-50 hover:border-2 border-black border-solid hover:p-1.5 p-2" width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg></a>
                    </div>  
                    <button 
                        @click="profileMenuOpen = !profileMenuOpen"
                        class="ml-10 w-9 h-9 bg-white flex flex-row align-center justify-around pt-1.5 rounded-full transition ease-in-out delay-50 hover:border-2 border-black border-solid hover:pt-1">
                        <div class="w-6 h-6 p-2 rounded-full" style="background: linear-gradient(135deg, rgb(253, 34, 173), rgb(237, 86, 85))">
                            <img src="">
                        </div>                        
                    </button>
                    <a href="/create" class="
                                            hover:translate-y-[-1px]
                                            ml-3
                                            bg-black 
                                            w-36 
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
                            Create
                    </a>
                </div>
                
            </div>
            
        </div>
        <walletBlock v-if="connectWalletShow" class="fixed inset-1/4 border-solid border-black border-2"/>
        <transition name="bounce">
            <div class="bg-white w-80 h-96 p-5 flex flex-col rounded-2xl absolute right-1" v-if="profileMenuOpen">
                <a href="/profile" class="hover:bg-gray-300 p-2 rounded-2xl">
                    <div class="flex flex-row items-center">
                        <div class="w-9 h-9 rounded-full mr-2"
                            style="background: linear-gradient(135deg, rgb(253, 34, 173), rgb(237, 86, 85))"><img src="" alt="">
                        </div>
                        <p>Profile</p>
                    </div>
                </a>
                <div class="p-2">
                    <div>
                        <div class="border-2 border-gray-300 border-solid p-2 rounded-t-lg">
                            <div class="flex flex-row ">
                                <h2 class="mr-6 text-gray-500">Wallet Balance</h2>
                                <a
                                    href="https://etherscan.io/address/0x413e1009e92CB5e7C8B047Cf2a66305411997752">0x413e...7752</a>
                            </div>
                            <p class="font-bold"> 0 ETH</p>
                        </div>
                        <div
                            class="border-r-2 border-l-2 border-b-2 border-gray-300 border-solid p-2 hover:bg-gray-300 rounded-b-lg">
                            <a href="/balance">
                                <h2 class="text-gray-500">MarketPlace Balance</h2>
                                <p class="font-bold">0 ETH</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                    <ul>
                        <li><a class="flex flex-row items-center p-2 hover:hover:bg-gray-300 rounded-lg" href="/settings">
                                <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                    <path
                                        d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />
                                </svg>
                                <p class="ml-2">Settings</p>
                            </a></li>
                        <li><a class="flex flex-row items-center p-2 hover:hover:bg-gray-300 rounded-lg"
                                href="https://help.foundation.app/hc/en-us">
                                <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                    <path
                                        d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                                </svg>
                                <p class="ml-2">Help</p>
                            </a></li>
                        <li><a class="flex flex-row items-center p-2 hover:hover:bg-gray-300 rounded-lg" href="#">
                                <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                    <path
                                        d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z" />
                                </svg>
                                <p class="ml-2">Disconnect</p>
                            </a></li>
                    </ul>
                </div>
            </div>
        </transition>
        
    </div>
</template>

<script>
import walletBlock from './walletBlock.vue';
export default {    
    name: 'HeaderAuthorized',
    components: {
        walletBlock
    },
    data(){
        return {
            mobNavOpen: false,
            exploreShow: false,
            connectWalletShow: false,
            isVisibleSearch: false,
            profileMenuOpen: false,
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
        },
        toggleVisibleSearchLine(){
            this.isVisibleSearch = !this.isVisibleSearch;

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