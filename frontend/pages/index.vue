<template>
    <main class="home">
        <h1 class="title"><Logo /> behind the code</h1>
        <section class="links">
            <span>Browse by</span>
            <div class="links__container">
                <NuxtLink to="/categories" class="link"> Categories </NuxtLink>
                <NuxtLink to="/subjects" class="link"> Subjects </NuxtLink>
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
