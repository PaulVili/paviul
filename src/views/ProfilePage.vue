<template>
  <div>
    <HeaderAuthorized />
    <div class="min-h-[500px]">
      
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderAuthorized from '@/components/HeaderAuthorized.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'ProfilePage',
    components: {
      HeaderAuthorized,
      Footer
    }

}
</script>

<style>

</style>