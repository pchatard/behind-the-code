<template>
    <main class="categories">
        <h1 class="categories__title">Categories</h1>
        <div class="categories__list">
            <Category
                v-for="category in categories"
                :key="category.id"
                :category="category"
            />
        </div>
    </main>
</template>

<script>
export default {
    computed: {
        categories() {
            return this.$store.state.categories.list;
        },
    },
};
</script>
