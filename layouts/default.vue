<template>
    <div class="default__layout">
        <Header :categories="categories" />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    async fetch() {
        await this.getCategories();
        await this.getArticles();
        await this.getSubjects();
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
            getSubjects: 'subjects/getSubjects',
        }),
    },
};
</script>

<style lang="scss">
@import '@/assets/styles/main';
</style>
