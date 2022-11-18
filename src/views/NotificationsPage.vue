<template>
  <div>
    <HeaderAuthorized />
    <div class="min-h-[500px] pt-28">
      <h2 class="text-center text-5xl font-bold">Notifications</h2>
    </div>
        
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderAuthorized from '@/components/HeaderAuthorized.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'NotificationsPage',
    components: {
        HeaderAuthorized, 
        Footer
    }
}
</script>

<style>

</style>