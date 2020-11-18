<template>
    <div class="default__layout">
        <Header :categories="categories" />
        <Nuxt :articles="articles" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    async fetch() {
        await this.getCategories();
        await this.getArticles();
    },
    computed: {
        ...mapGetters({
            categories: 'categories/categories',
            articles: 'articles/articles',
        }),
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
