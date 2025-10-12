<template>
  <HyperHeader v-if="$route.name != 'NotFound'
    && $route.name != 'userdashboard'
    && $route.name != 'dusercomponent'
    && $route.name != 'userprofile'
    && $route.name != 'properties'"/>

    <RouterView />
    <HyperFooter v-if="$route.name != 'NotFound'
      && $route.name != 'userdashboard'
      && $route.name != 'dusercomponent'
      && $route.name != 'userprofile'
      && $route.name != 'properties'"/>

</template>
<script>

import HyperHeader from './components/HyperHeader.vue';
import HyperFooter from './components/HyperFooter.vue';
export default {
  components: {
    HyperHeader,
    HyperFooter,
  }
}
</script>