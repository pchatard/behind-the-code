<template>
    <main class="home">
        <h2 class="subtitle">Bienvenue sur</h2>
        <h1 class="title">behind the code</h1>

        <Banner>
            <span class="banner__title">Découvrir les articles par</span>
            <div class="banner__container">
                <NuxtLink to="/categories" class="banner__link">
                    Catégories
                </NuxtLink>
                <NuxtLink to="/subjects" class="banner__link">
                    Thèmes
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
            if (process.env.NODE_ENV === 'development') {
                return this.$store.state.articles.list;
            } else {
                return this.$store.state.articles.list.filter(
                    (article) => article.public
                );
            }
        },
    },
    head() {
        return {
            title: 'Accueil - Behind The Code',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Behind The Code explore, explique et vulgarise les concepts clés derrière les technologies utilisées en développement web, avec des mots simples.',
                },
            ],
        };
    },
};
</script>
