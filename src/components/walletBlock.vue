<template>
    <div class="flex flex-col items-center bg-white rounded-lg" v-if="isVisible">
        <p class=" cursor-pointer mt-2" @click="isVisible = false"><svg width="64px" height="64px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg></p>
        <h2 class="text-2xl font-bold">Select a wallet</h2>
        <p class="w-80 mt-3 mb-3">By connecting your wallet, you agree to our
            <a href="#" class="mr-1 underline">Terms of Service</a>
            and our
            <a href="#" class="ml-1 underline">Privacy Policy</a>
        </p>        
        <div class="wallets">
            <ul>
                <li class="Metamask mb-1 rounded-full p-2 text-center"><a href="#">Metamask</a></li>
                <li class="WalletConnect mb-1 rounded-full p-2 text-center"><a href="#">WalletConnect</a></li>
                <li class="Coinbase rounded-full p-2 text-center"><a href="#">Coinbase Wallet</a></li>
            </ul>
        </div>
        <a href="#" class="font-bold">New to Ethereum?</a>
        <a href="#" class="underline">Learn about wallets</a>
    </div>
</template>

<script>
export default {
    name: 'wallet-block',
    data(){
        return{
            isVisible: true,
        }
    },
    
    
}
</script>

<style>
.Metamask{
    background-image: linear-gradient(267.54deg, rgb(255, 220, 36) 1.63%, rgb(255, 92, 0) 98.05%);
}
.WalletConnect{
    background-image: linear-gradient(267.56deg, rgb(5, 0, 255) 0%, rgb(143, 0, 255) 97.07%);
}
.Coinbase{
    background-image: linear-gradient(267.56deg, rgb(0, 82, 255) 0%, rgb(55, 115, 245) 97.07%);
}
</style>