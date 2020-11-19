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
                            :class="{ active: filterIds.includes(subject.id) }"
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
    data() {
        return {
            id: this.$route.params.id,
            filterIds: [],
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
            if (!this.filterIds.length) {
                return this.articles;
            }
            const filteredArray = this.articles.filter((article) => {
                const index = article.subjects.findIndex((sub) =>
                    this.filterIds.includes(sub.id)
                );
                if (index === -1) {
                    return false;
                }
                return true;
            });
            return filteredArray;
        },
    },
    methods: {
        filterArticles(id) {
            if (this.filterIds.includes(id)) {
                const index = this.filterIds.findIndex(
                    (filterId) => filterId === id
                );
                this.filterIds.splice(index, 1);
            } else {
                this.filterIds.push(id);
            }
        },
    },
};
</script>
