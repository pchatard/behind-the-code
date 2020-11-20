<template>
    <div class="preview">
        <!-- Create an ArticleImage component -->
        <img
            v-show="article.image"
            :src="formatedImageUrl"
            alt="article image"
            class="preview__img"
        />
        <h3 class="preview__title">
            {{ article.title }}
        </h3>
        <div class="preview__subjects">
            <!-- Turn this span into a SubjectLink -->
            <span
                v-for="subject in article.subjects"
                :key="subject.id"
                class="preview__subject"
            >
                {{ subject.title }}
            </span>
        </div>
        <!-- Create a ArticlePreviewtext component -->
        <p class="preview__text">
            {{ article.preview || 'Preview coming soon...' }}
        </p>
        <!-- Change this into a proper component -->
        <NuxtLink :to="'/articles/' + article.id" class="preview__cta">
            Read
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        article: {
            default: () => ({}),
            type: Object,
        },
    },
    computed: {
        formatedImageUrl() {
            if (this.article.image) {
                return (
                    process.env.strapiBaseUrl +
                    this.article.image.formats.small.url
                );
            }
            return null;
        },
    },
};
</script>
