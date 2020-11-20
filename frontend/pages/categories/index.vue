<template>
    <main class="categories">
        <h1 class="categories__title">Categories</h1>
        <div class="categories__list">
            <CategoryLink
                v-for="category in categories"
                :key="category.id"
                :category="category"
            />
        </div>
    </main>
</template>

<script>
import CategoryLink from '@/components/CategoryLink';

export default {
    components: {
        CategoryLink,
    },
    computed: {
        categories() {
            return this.$store.state.categories.list;
        },
    },
};
</script>
