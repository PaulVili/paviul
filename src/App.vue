<template>
  <div id="app" class="p-5 bg-gray-100">
    
      <router-view>
        <router-link to="{name: 'HomePage'}"><HomePage /></router-link>
        <router-link to="{name: 'NotificationsPage'}"><NotificationsPage /></router-link>
      </router-view>
    
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue';
import NotificationsPage from './views/NotificationsPage.vue';
export default {
  name: 'App',
  components: {
    HomePage,
    NotificationsPage
  },
  
}
</script>
<style></style>
