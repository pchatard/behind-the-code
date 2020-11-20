<template>
    <main class="home">
        <h2>Welcome to</h2>
        <h1 class="title">behind the code</h1>
        <section class="links">
            <span>Browse articles by</span>
            <div class="links__container">
                <NuxtLink to="/categories" class="link"> Category </NuxtLink>
                <NuxtLink to="/subjects" class="link"> Subject </NuxtLink>
            </div>
        </section>
        <section class="articles">
            <Article
                v-for="article in articles"
                :key="article.id"
                :article="article"
            />
        </section>
    </main>
</template>

<script>
export default {
    computed: {
        articles() {
            return this.$store.state.articles.list;
        },
    },
};
</script>
