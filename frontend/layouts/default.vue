<template>
    <div class="default__layout">
        <Header :categories="categories" />
        <Nuxt />
    </div>
</template>

<script>
export default {
    async fetch() {
        this.categories = await this.$axios.$get('/categories');
    },
    data() {
        return {
            categories: [],
        };
    },
};
</script>

<style lang="scss">
@import '@/assets/styles/main';
</style>
