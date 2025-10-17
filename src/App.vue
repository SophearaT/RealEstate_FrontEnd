<template>
  <!-- <HyperHeader v-if="$route.name != 'dashboard'|| $router.name != 'NotFound'"/>   -->
  <!-- <HyperHeader v-else-if ="$route.name != 'NotFound'"/> -->
  <HyperHeader v-if="shouldShowComponent"/>
  <RouterView/>
  <HyperFooter v-if="shouldShowComponent"/>
  <!-- <HyperFooter v-if="$route.name != 'dashboard' || $router.name != 'NotFound'"/> -->
  <!-- <HyperFooter v-if ="$route.name != '/dashboard'"/> -->
</template>
<script>

import HyperHeader from './components/HyperHeader.vue';
import HyperFooter from './components/HyperFooter.vue';
export default {
  components: {
    HyperHeader,
    HyperFooter,
  },
   computed: {
    shouldShowComponent() {
      const excludedRoutes = ['dashboard', 'NotFound','property','edit','user'];
      return !excludedRoutes.includes(this.$route.name);
    }
  }
}
</script>