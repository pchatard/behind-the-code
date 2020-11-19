<template>
    <div class="preview">
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
            <span
                v-for="subject in article.subjects"
                :key="subject.id"
                class="preview__subject"
            >
                {{ subject.title }}
            </span>
        </div>
        <p class="preview__text">
            {{ article.preview || 'Preview coming soon...' }}
        </p>
        <NuxtLink :to="'/articles/' + article.id" class="preview__cta">
            Read
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'Article',
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
