<template>
    <div>
        <HeaderAuthorized />
        <div class="min-h-[500px] pt-28">
            <h2 class="text-center text-5xl font-bold">Settings</h2>
            <div class="flex justify-center ">
                <form class="flex justify-center flex-col mt-5 p-5 bg-white rounded-xl max-w-[720px] border-2 border-solid shadow-md">
                <div class="flex flex-row flex-wrap	  p-2">
                    <p class="text-xl font-bold mt-2 mr-5">Your email address</p>
                    <input 
                        type="email"
                        placeholder="Email" 
                        v-model="email"
                        @blur="v$.email.$touch"                
                        class="
                            rounded-lg 
                            p-3
                            border-2 
                            border-solid 
                            border-gray-100 
                            hover:border-gray-300 
                            w-8/12">  
                    <p v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</p>                  
                </div>
                <div class="flex flex-col ">
                    <h2 class="text-xl font-bold mb-5">Email notifications</h2>
                    <div 
                        class="
                            flex 
                            flex-row
                            bg-white
                            rounded-xl 
                            border-2 
                            border-solid 
                            border-gray-100 
                            p-5 
                            mb-2 
                            hover:border-black"
                        
                        @click="auction = !auction">
                        <input type="checkbox"  class="w-10 h-10 rounded-4xl" v-model="auction" >
                        <div class="ml-5">
                            <h3 class="font-bold text-xl">Auction notifications</h3>
                            <p class="text-gray-400">Receive email notifications when bids you place are confirmed, when you have been
                                outbid, and when an auction has ended.</p>
                        </div>
                    </div>
                    <div class="flex flex-row bg-white rounded-xl border-2 border-solid border-gray-100 p-5 mb-2 hover:border-black"
                        @click="buyNow = !buyNow"
                        >
                        <input type="checkbox" class="w-10 h-10" v-model="buyNow">
                        <div class="ml-5">
                            <h3 class="font-bold text-xl">Buy Now notifications</h3>
                            <p class="text-gray-400">Receive email notifications when someone buys your NFT and when you buy an NFT via
                                Buy Now.</p>
                        </div>
                    </div>
                    <div class="flex flex-row bg-white rounded-xl border-2 border-solid border-gray-100 p-5 mb-2 hover:border-black"
                        @click="offer = !offer"
                        >
                        <input type="checkbox" class="w-10 h-10" v-model="offer">
                        <div class="ml-5">
                            <h3 class="font-bold text-xl">Offer notifications</h3>
                            <p class="text-gray-400">Receive email notifications when someone sends you an Offer, when you send an
                                Offer, and when someone accepts your offer.</p>
                        </div>
                    </div>
                    <div class="flex flex-row bg-white rounded-xl border-2 border-solid border-gray-100 p-5 mb-2 hover:border-black"
                        @click="sale = !sale"
                        >
                        <input type="checkbox" class="w-10 h-10 " v-model="sale" >
                        <div class="ml-5">
                            <h3 class="font-bold text-xl">For sale notifications</h3>
                            <p class="text-gray-400">Receive email notifications when profiles that you follow list a new NFT for
                                auction and set a Buy Now price on Foundation.</p>
                        </div>
                    </div>
                </div>
                <button type="submit" 
                    :disabled="isDisabled"            
                    class="
                    hover:translate-y-[-1px]
                    mt-5
                    bg-black 
                    w-74 
                    h-12
                    font-bold
                    p-2 
                    shadow-lg 
                    text-xl 
                    text-white 
                    rounded-3xl 
                    text-center 
                    block                     
                    "                    
                >
                Save changes
                </button>
            </form>
            </div>
            
        </div>
        <Footer />
    </div>    
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import HeaderAuthorized from '@/components/HeaderAuthorized.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'SettingsPage',
    setup () {
        return { v$: useVuelidate() }
    },
    components: {
        HeaderAuthorized,
        Footer
    },
    data(){
        return{
            auction: false,
            buyNow: false,
            offer: false,
            sale: false,
            email: '',    
       }
    },
    computed: {
        isDisabled(){
            return(!this.email)           
        }
    },
    validations() {
        return {email: { required, email }}
    }
}
</script>

<style>

</style>