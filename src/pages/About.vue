<template>
    <HeroSection />
    <content-bio />
</template>
<script>
import HeroSection from '@/components/HeroSection.vue';
import ContentBio from '@/components/ContentBio.vue';

export default {
    components: {
        HeroSection,
        ContentBio
    }
}
</script>
