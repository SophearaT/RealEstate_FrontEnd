<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names

<template>
    <HeroBanner />
    <BannerLeft />
</template>
<script>
import HeroBanner from '@/components/HeroBanner.vue'
import BannerLeft from '@/components/BannerLeft.vue'

export default {
    components: {
        HeroBanner,
        BannerLeft
       
    }
}
</script>