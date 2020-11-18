<template>
    <main class="main category">
        <h1>{{ category.name }}</h1>
        <img :src="formatedUrl" alt="" />
        <h2>Subjects</h2>
        <ul>
            <li v-for="subject in category.subjects" :key="subject.id">
                {{ subject.title }}
            </li>
        </ul>
        <h2>Articles</h2>
        <ul>
            <li v-for="article in category.articles" :key="article.id">
                <NuxtLink :to="'/article/' + article.id">
                    {{ article.title }}
                </NuxtLink>
            </li>
        </ul>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            apiUrl: process.env.strapiBaseUrl,
            id: this.$route.params.id,
        };
    },
    computed: {
        ...mapGetters({ categoryId: 'categories/categoryId' }),
        category() {
            return this.categoryId(this.id);
        },
        formatedUrl() {
            return this.apiUrl + this.category.image.formats.large.url;
        },
    },
};
</script>
