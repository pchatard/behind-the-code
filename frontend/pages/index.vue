<template>
    <main class="home">
        <h2 class="subtitle">Welcome to</h2>
        <h1 class="title">behind the code</h1>

        <Banner>
            <span class="banner__title">Browse articles by</span>
            <div class="banner__container">
                <NuxtLink to="/categories" class="banner__link">
                    Category
                </NuxtLink>
                <NuxtLink to="/subjects" class="banner__link">
                    Subject
                </NuxtLink>
            </div>
        </Banner>

        <section class="articles">
            <ArticlePreview
                v-for="article in articles"
                :key="article.id"
                :article="article"
            />
        </section>
    </main>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview';
import Banner from '@/components/Banner';

export default {
    components: { ArticlePreview, Banner },
    computed: {
        articles() {
            return this.$store.state.articles.list;
        },
    },
    head() {
        return {
            title: 'Home - Behind The Code',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Behind The Code, explaining the core concepts behind web technologies with simple words',
                },
            ],
        };
    },
};
</script>
