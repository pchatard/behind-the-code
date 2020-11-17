<template>
    <main class="main category">
        <h1>{{ category.name }}</h1>
        <ul>
            <li v-for="article in category.articles" :key="article.id">
                {{ article.title }}
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    async asyncData({ params, $axios }) {
        const category = await $axios.$get(`/categories/${params.id}`);
        return {
            category,
        };
    },
};
</script>
