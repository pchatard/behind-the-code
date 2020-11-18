<template>
    <main class="main article">
        <h1 class="article__title">{{ article.title }}</h1>
        <div class="article__subjects">
            <span
                v-for="subject in article.subjects"
                :key="subject.id"
                class="subject"
            >
                {{ subject.title }}
            </span>
        </div>
        <section
            class="article__content"
            v-html="$md.render(parsedContent)"
        ></section>
        <div class="article__resources">
            <a
                v-for="resource in article.resources"
                :key="resource.id"
                :href="resource.link"
                class="resource"
            >
                {{ resource.title }}
            </a>
        </div>
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
        ...mapGetters({ articleId: 'articles/articleId' }),
        article() {
            return this.articleId(this.id);
        },
        parsedContent() {
            return this.article.content
                .split('/uploads')
                .join(`${this.apiUrl}/uploads`);
        },
    },
};
</script>

<style lang="scss">
.article {
    margin: 5rem;

    &__content {
        width: 100%;

        img {
            max-width: 100%;
        }
    }
}
</style>
