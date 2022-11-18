<template>
  <div>
    <HeaderAuthorized />
    <div class="min-h-[500px] pt-28">
        <div class="flex justify-center">
            <div class="p-10 bg-white w-3/6 flex flex-col items-left rounded-xl border-2 border-solid shadow-md ">
                <h2 class="text-3xl font-bold">Marketplace Balance</h2>
                <div class="flex flex-col rounded-xl border-2 border-solid shadow-md w-11/12 mt-5 p-5">
                    <h2 class=" text-lg text-gray-500">Marketplace Balance</h2>
                    <p class="font-bold text-3xl">0 ETH</p>
                </div>
                <p class="my-5 text-lg text-gray-500">When your Offer expires or a higher Offer is made, you are auto-refunded
                    to your Marketplace Balance. You can use Marketplace Balance to make another Offer, purchase a work through
                    Buy Now, place a Bid, or convert your balance back to ETH.</p>
                <a href="https://help.foundation.app/hc/en-us/articles/6601042998299" class="mb-5 underline text-gray-500">Learn
                    about your Marketplace Balance</a>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderAuthorized from '@/components/HeaderAuthorized.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'MarketPlaceBalancePage',
    components: {
        HeaderAuthorized,
        Footer
    }
}
</script>

<style>

</style>