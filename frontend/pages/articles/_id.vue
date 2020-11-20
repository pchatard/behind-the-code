<template>
    <article class="article">
        <h1 class="article__title">{{ article.title }}</h1>
        <Author :published-date="article.published_at" />
        <div class="article__subjects">
            <SubjectLink
                v-for="subject in article.subjects"
                :key="subject.id"
                :subject="subject"
            />
        </div>

        <section>
            <div class="content" v-html="article.content"></div>
            <aside class="resources">
                <h3 class="resources__title">Sources and useful links</h3>
                <ol>
                    <li
                        v-for="resource in article.resources"
                        :key="resource.id"
                    >
                        <Resource :resource="resource" />
                    </li>
                </ol>
            </aside>
        </section>
    </article>
</template>

<script>
import SubjectLink from '@/components/ArticlePage/SubjectLink';
import Resource from '@/components/ArticlePage/Resource';

export default {
    components: {
        SubjectLink,
        Resource,
    },
    data() {
        return {
            id: parseInt(this.$route.params.id),
        };
    },
    computed: {
        article() {
            return this.$store.state.articles.list.find((art) => {
                return art.id === this.id;
            });
        },
    },
};
</script>
