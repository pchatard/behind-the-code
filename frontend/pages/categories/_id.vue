<template>
    <main class="category">
        <h1 class="category__title">
            {{ category.name }}
        </h1>

        <Banner>
            <div class="banner__container">
                <BannerArticles :latest-articles="latestArticles" />
                <BannerSubjects
                    :subjects="category.subjects"
                    :active-subject-ids="subjectIds"
                    @filter="filterArticles"
                />
            </div>
        </Banner>

        <section class="category__articles">
            <ArticlePreview
                v-for="article in filteredArticles"
                :key="article.id"
                :article="article"
            />
        </section>
    </main>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview';
import Banner from '@/components/Banner';
import BannerArticles from '@/components/BannerArticles';
import BannerSubjects from '@/components/BannerSubjects';

export default {
    components: {
        ArticlePreview,
        Banner,
        BannerArticles,
        BannerSubjects,
    },
    asyncData({ query }) {
        return {
            subjectQuery: query.subjects || {},
        };
    },
    data() {
        return {
            id: this.$route.params.id,
        };
    },
    computed: {
        category() {
            return this.$store.state.categories.list.find(
                (cat) => cat.id === parseInt(this.id)
            );
        },
        articles() {
            return this.$store.state.articles.list.filter(
                (article) => article.category.id === this.category.id
            );
        },
        latestArticles() {
            const articles = this.articles;
            articles.splice(2);
            return articles;
        },
        filteredArticles() {
            if (!this.subjectIds.length) {
                return this.articles;
            }
            const filteredArray = this.articles.filter((article) => {
                const index = article.subjects.findIndex((sub) =>
                    this.subjectIds.includes(sub.id)
                );
                if (index === -1) {
                    return false;
                }
                return true;
            });
            return filteredArray;
        },
        subjectIds() {
            if (
                Object.keys(this.subjectQuery).length === 0 &&
                this.subjectQuery.constructor === Object
            ) {
                return [];
            }
            return this.subjectQuery.split(',').map((id) => parseInt(id));
        },
    },
    watchQuery: ['subjects'],
    methods: {
        filterArticles(id) {
            if (this.subjectIds.includes(id)) {
                const index = this.subjectIds.findIndex(
                    (filterId) => filterId === id
                );
                this.subjectIds.splice(index, 1);
                this.$router.push({
                    path: this.$route.path,
                    query: { subjects: [...this.subjectIds].join(',') },
                });
            } else {
                this.subjectIds.push(id);
                this.$router.push({
                    path: this.$route.path,
                    query: { subjects: [...this.subjectIds].join(',') },
                });
            }
        },
    },
    head() {
        return {
            title: `${this.category.name} articles - Behind The Code`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `${this.category.description}`,
                },
            ],
        };
    },
};
</script>
