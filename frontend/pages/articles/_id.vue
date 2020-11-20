<template>
    <article class="article">
        <h1 class="article__title">{{ article.title }}</h1>
        <ArticleInfo :published-date="article.published_at" />
        <div class="article__subjects">
            <SubjectLink
                v-for="subject in article.subjects"
                :key="subject.id"
                :subject="subject"
            />
        </div>

        <section>
            <div class="content" v-html="article.content"></div>
            <!-- Create ResourceContainer and ResourceList components -->
            <aside class="resources">
                <h3 class="resources__title">Sources and useful links</h3>
                <ol>
                    <li
                        v-for="resource in article.resources"
                        :key="resource.id"
                    >
                        <ArticleResource :resource="resource" />
                    </li>
                </ol>
            </aside>
        </section>
    </article>
</template>

<script>
import SubjectLink from '@/components/SubjectLink';
import ArticleResource from '@/components/ArticleResource';
import ArticleInfo from '@/components/ArticleInfo';

export default {
    components: {
        SubjectLink,
        ArticleResource,
        ArticleInfo,
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
