<template>
    <div>
        <Header v-if="!authorize"></Header>
        <HeaderAuthorized v-if="authorize"></HeaderAuthorized>

        <div class="min-h-[500px] py-28">
            <div>
                <div class="flex flex-row justify-between">
                    <h2 class="text-3xl">Curated drops</h2>
                    <a href="/drops" class="text-xl text-gray-600 hover:text-black">Learn more</a>
                </div>
                <div class="my-5 flex flex-row flex-nowrap">
                    <a href="#" class="mr-2 w-[calc(25% - 24px)] block">
                        <div class="relative w-full min-h-[490px] rounded-2xl hover:translate-y-[-2px]">
                            <img src="https://f8n-production.imgix.net/collections/pdphdsuaw.jpg?q=60&w=1600&fit=fill"
                                 class="block w-full min-h-[490px] rounded-2xl brightness-50" />
                            <div class="absolute top-0 w-full p-5">
                                <div class="flex flex-row justify-between w-full">
                                    <div
                                        class="rounded-xl border-8 border-gray-400 border-solid max-w-[106px] max-h-[106px]">
                                        <img src="https://f8n-production.imgix.net/collections/yyizmwy60.jpg?q=45&w=90&h=90&fit=crop&dpr=2"
                                            class="block max-w-full max-h-full">
                                    </div>
                                    <span
                                        class="uppercase text-white text-right font-bold bg-gray-400 rounded-full px-2 pt-1 max-h-[34px]">relic</span>
                                </div>
                                <div class="flex flex-col mt-[50%]">
                                    <div>
                                        <h2 class="text-white text-4xl font-bold">The History of Tomorrow</h2>
                                    </div>
                                    <div class="flex flex-row justify-between mt-[10%]">
                                        <div class="flex flex-row p-2 cursor-pointer bg-gray-400 hover:bg-white rounded-full " @click="clickCuratedDropsAuthor">
                                            <img src="https://f8n-production.imgix.net/creators/profile/5e7vf60u3-000122260014-14a-copy-jpeg-m4hp6x.jpeg?q=45&w=136&h=136&fit=crop&dpr=2" class="block w-[24px] h-[24px] rounded-full mr-1">
                                            <span class="text-white hover:text-black ">@serwah</span>
                                        </div>
                                        <span class="uppercase bg-white text-black rounded-full px-2 py-2">drop</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="mr-2 w-[calc(25% - 24px)] block">
                        <div class="relative w-full min-h-[490px] rounded-2xl hover:translate-y-[-2px]">
                            <img src="https://f8n-production.imgix.net/collections/pdphdsuaw.jpg?q=60&w=1600&fit=fill"
                                 class="block w-full min-h-[490px] rounded-2xl brightness-50" />
                            <div class="absolute top-0 w-full p-5">
                                <div class="flex flex-row justify-between w-full">
                                    <div
                                        class="rounded-xl border-8 border-gray-400 border-solid max-w-[106px] max-h-[106px]">
                                        <img src="https://f8n-production.imgix.net/collections/yyizmwy60.jpg?q=45&w=90&h=90&fit=crop&dpr=2"
                                            class="block max-w-full max-h-full">
                                    </div>
                                    <span
                                        class="uppercase text-white text-right font-bold bg-gray-400 rounded-full px-2 pt-1 max-h-[34px]">relic</span>
                                </div>
                                <div class="flex flex-col mt-[50%]">
                                    <div>
                                        <h2 class="text-white text-4xl font-bold">The History of Tomorrow</h2>
                                    </div>
                                    <div class="flex flex-row justify-between mt-[10%]">
                                        <div class="flex flex-row p-2 cursor-pointer bg-gray-400 hover:bg-white rounded-full " @click="clickCuratedDropsAuthor">
                                            <img src="https://f8n-production.imgix.net/creators/profile/5e7vf60u3-000122260014-14a-copy-jpeg-m4hp6x.jpeg?q=45&w=136&h=136&fit=crop&dpr=2" class="block w-[24px] h-[24px] rounded-full mr-1">
                                            <span class="text-white hover:text-black ">@serwah</span>
                                        </div>
                                        <span class="uppercase bg-white text-black rounded-full px-2 py-2">drop</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="mr-2 w-[calc(25% - 24px)] block">
                        <div class="relative w-full min-h-[490px] rounded-2xl hover:translate-y-[-2px]">
                            <img src="https://f8n-production.imgix.net/collections/pdphdsuaw.jpg?q=60&w=1600&fit=fill"
                                 class="block w-full min-h-[490px] rounded-2xl brightness-50" />
                            <div class="absolute top-0 w-full p-5">
                                <div class="flex flex-row justify-between w-full">
                                    <div
                                        class="rounded-xl border-8 border-gray-400 border-solid max-w-[106px] max-h-[106px]">
                                        <img src="https://f8n-production.imgix.net/collections/yyizmwy60.jpg?q=45&w=90&h=90&fit=crop&dpr=2"
                                            class="block max-w-full max-h-full">
                                    </div>
                                    <span
                                        class="uppercase text-white text-right font-bold bg-gray-400 rounded-full px-2 pt-1 max-h-[34px]">relic</span>
                                </div>
                                <div class="flex flex-col mt-[50%]">
                                    <div>
                                        <h2 class="text-white text-4xl font-bold">The History of Tomorrow</h2>
                                    </div>
                                    <div class="flex flex-row justify-between mt-[10%]">
                                        <div class="flex flex-row p-2 cursor-pointer bg-gray-400 hover:bg-white rounded-full " @click="clickCuratedDropsAuthor">
                                            <img src="https://f8n-production.imgix.net/creators/profile/5e7vf60u3-000122260014-14a-copy-jpeg-m4hp6x.jpeg?q=45&w=136&h=136&fit=crop&dpr=2" class="block w-[24px] h-[24px] rounded-full mr-1">
                                            <span class="text-white hover:text-black ">@serwah</span>
                                        </div>
                                        <span class="uppercase bg-white text-black rounded-full px-2 py-2">drop</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="w-[calc(25% - 24px)] block" >
                        <div class="relative w-full min-h-[490px] rounded-2xl hover:translate-y-[-2px]">
                            <img src="https://f8n-production.imgix.net/collections/pdphdsuaw.jpg?q=60&w=1600&fit=fill"
                                 class="block w-full min-h-[490px] rounded-2xl brightness-50" />
                            <div class="absolute top-0 w-full p-5">
                                <div class="flex flex-row justify-between w-full">
                                    <div
                                        class="rounded-xl border-8 border-gray-400 border-solid max-w-[106px] max-h-[106px]">
                                        <img src="https://f8n-production.imgix.net/collections/yyizmwy60.jpg?q=45&w=90&h=90&fit=crop&dpr=2"
                                            class="block max-w-full max-h-full">
                                    </div>
                                    <span
                                        class="uppercase text-white text-right font-bold bg-gray-400 rounded-full px-2 pt-1 max-h-[34px]">relic</span>
                                </div>
                                <div class="flex flex-col mt-[50%]">
                                    <div>
                                        <h2 class="text-white text-4xl font-bold">The History of Tomorrow</h2>
                                    </div>
                                    <div class="flex flex-row justify-between mt-[10%]">
                                        <div class="flex flex-row p-2 cursor-pointer bg-gray-400 hover:bg-white rounded-full " @click="clickCuratedDropsAuthor">
                                            <img src="https://f8n-production.imgix.net/creators/profile/5e7vf60u3-000122260014-14a-copy-jpeg-m4hp6x.jpeg?q=45&w=136&h=136&fit=crop&dpr=2" class="block w-[24px] h-[24px] rounded-full mr-1">
                                            <span class="text-white hover:text-black ">@serwah</span>
                                        </div>
                                        <span class="uppercase bg-white text-black rounded-full px-2 py-2">drop</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex flex-col">
                <div>
                    <h2 class="text-3xl">Curated collections</h2>
                </div>
                <div class="relative w-full my-5">
                    <div class="rounded-3xl">
                        <img src="https://f8n-production.imgix.net/collections/3lb2bvwik.jpg?q=50&auto=format%2Ccompress&fit=crop&max-w=1600&max-h=596&exp=-5&blur=180" class="block w-full rounded-3xl">
                    </div>
                    <div class="absolute top-0 w-full h-full p-16 flex flex-row ">
                        <a href="#" class="mr-5">
                            <div class="flex flex-col items-start ">
                                <div class="rounded-xl border-[12px] border-gray-400 border-solid max-w-[152px] max-h-[152px] mb-5">
                                    <img src="https://f8n-production.imgix.net/collections/uxl9w44rj.jpg?q=45&w=160&h=160&fit=crop&dpr=2"
                                        class="block w-full h-full">
                                </div>
                                <div class="mt-[200px]">
                                    <span
                                        class="uppercase text-white font-bold bg-gray-400 rounded-full px-2 py-1 max-h-[34px] mb-2">ngtvs</span>
                                    <h3 class="text-white mt-5 font-bold text-3xl mb-1">By Accident - The Negatives</h3>
                                    <span class="text-white font-bold text-xl">500 NFTs</span>
                                    <div class="flex flex-row p-2 cursor-pointer bg-gray-400 hover:bg-white rounded-full mt-5 w-[250px]">
                                        <img src="https://f8n-production.imgix.net/collections/uxl9w44rj.jpg?q=45&w=160&h=160&fit=crop&dpr=2"
                                            class="w-[32px] h-[32px] rounded-full mr-1">
                                        <span class="text-white hover:text-black font-bold">@byaccidentthenegatives</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="w-[340px] h-[340px] hover:translate-y-[-2px]">
                            <div class="relative ">
                                <div class="brightness-50">
                                    <img src="https://f8n-production-collection-assets.imgix.net/0x49E6b0cFB1880Fd7afb69C062613238049A4b56b/104/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&h=640" class="block w-[340px] h-[400px] rounded-t-lg" >
                                </div>                                
                                <div class="absolute w-full h-full top-0 p-4 flex flex-col">
                                    <div class="flex flex-row">
                                        <img src="https://f8n-production.imgix.net/collections/uxl9w44rj.jpg?q=45&w=160&h=160&fit=crop&dpr=2" class="block w-[32px] h-[32px] rounded-lg">
                                        <p class="text-white ml-1 ">By Accident - The Negatives</p>
                                    </div>
                                    <div class="mt-[65%]">
                                        <h4 class="text-white text-3xl">By Accident - The Negatives #104</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white p-4 h-[180px] rounded-b-lg">
                                <div class="flex flex-row p-2 cursor-pointer rounded-full ">
                                    <img src="https://f8n-production.imgix.net/collections/uxl9w44rj.jpg?q=45&w=160&h=160&fit=crop&dpr=2"
                                        class="w-[32px] h-[32px] rounded-full mr-1">
                                    <span class="text-gray-600 hover:text-black font-bold">@byaccidentthenegatives</span>
                                </div>
                                <div class="flex flex-row justify-between mt-[10%]">
                                    <div class="flex flex-col w-[100px]">
                                        <h4 class="text-gray-600 text-lg">Buy Now</h4>
                                        <span class="font-bold text-xl">0.04 ETH</span>
                                    </div>
                                    <div>
                                        <div class="flex flex-row p-2 cursor-pointer rounded-full">
                                            <img src="https://f8n-production.imgix.net/creators/profile/pvy7na7er-profile-jpg-5vvkeu.jpg?q=45&w=136&h=136&fit=crop&dpr=2"
                                                class="w-[32px] h-[32px] rounded-full mr-1">
                                            <span class="text-gray-600 hover:text-black font-bold">@louisiruela</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <a href="/drops ">
                <div class="flex flex-col items-center">
                    <h2 class="text-3xl sm:text-5xl  mb-10">
                        Introducing drops
                    </h2>
                    <p class="font-bold mb-10 text-5xl md:text-7xl flex flex-col sm:flex-row "> A new <span
                            class=" hover:translate-y-[-1px] mt-2 sm:ml-2 sm:text-center text-purple-600 bg-fuchsia-200 p-2 rounded-3xl">way</span>
                        to <span
                            class="hover:translate-y-[-1px] sm:ml-2 text-center p-2  bg-amber-300 text-slate-400 rounded-3xl">create</span>
                    </p>
                    <button class="
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
                    block ">
                        Learn more
                    </button>
                </div>
            </a>
        </div>

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
    data() {
        return {
            authorize: true
        }
    },
    methods: {
        clickCuratedDropsAuthor(){
            this.$router.push('userId')
        }
    }

}
</script>

<style>
    .bg{
        background: rgba(0, 0, 0, 0.3);
    }
</style>