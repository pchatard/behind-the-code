<template>
    <div class="default__layout">
        <Header :categories="categories" />
        <Nuxt />
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    async fetch() {
        await this.getCategories();
        await this.getArticles();
    },
    computed: {
        categories() {
            return this.$store.state.categories.list;
        },
    },
    methods: {
        ...mapActions({
            getCategories: 'categories/getCategories',
            getArticles: 'articles/getArticles',
        }),
    },
};
</script>

<style lang="scss">
@import '@/assets/styles/main';
</style>
