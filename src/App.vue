<template>
  <HyperHeader/>
  <RouterView/>
  <HyperFooter/>
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