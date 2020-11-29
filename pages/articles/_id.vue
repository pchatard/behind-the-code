<template>
    <article class="article">
        <h1 class="article__title">{{ article.title }}</h1>
        <p class="article__info">Par Pierre Chatard, le {{ formatedDate }}</p>
        <div class="article__subjects">
            <SubjectLink
                v-for="subject in article.subjects"
                :key="subject.id"
                :subject="subject"
            />
        </div>

        <section class="article__content">
            <div class="content" v-html="article.content"></div>
            <Resources :resources="article.resources" />
        </section>
    </article>
</template>

<script>
import SubjectLink from '@/components/SubjectLink';
import Resources from '@/components/Resources';

export default {
    components: {
        SubjectLink,
        Resources,
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
        formatedDate() {
            const date = new Date(this.article.published_at);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
    },
    head() {
        return {
            title: `${this.article.title} - Behind The Code`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `${this.article.preview}`,
                },
            ],
        };
    },
};
</script>
