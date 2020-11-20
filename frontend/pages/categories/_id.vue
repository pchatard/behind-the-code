<template>
    <main class="category">
        <h1 class="category__title">
            {{ category.name }}
        </h1>
        <section class="category__links">
            <div>
                <div class="articles">
                    <h2>Latest Articles</h2>
                    <ul v-if="latestArticles.length">
                        <li
                            v-for="article in latestArticles"
                            :key="article.id"
                            class="article"
                        >
                            <NuxtLink
                                :to="'/articles/' + article.id"
                                class="article__link"
                            >
                                {{ article.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                    <ul v-else>
                        <li>
                            <p class="nothing">More content coming soon!</p>
                        </li>
                    </ul>
                </div>
                <div class="subjects">
                    <h2>Subjects</h2>
                    <ul>
                        <li
                            v-for="subject in category.subjects"
                            :key="subject.id"
                            class="subject__li"
                            :class="{ active: subjectIds.includes(subject.id) }"
                            @click="filterArticles(subject.id)"
                        >
                            {{ subject.title }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="category__articles">
            <Article
                v-for="article in filteredArticles"
                :key="article.id"
                :article="article"
            />
        </section>
    </main>
</template>

<script>
export default {
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
};
</script>
