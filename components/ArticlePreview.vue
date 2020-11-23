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
            <SubjectLink
                v-for="subject in article.subjects"
                :key="subject.id"
                :subject="subject"
            />
        </div>
        <p class="preview__text">
            {{ article.preview || 'Preview coming soon...' }}
        </p>
        <ButtonLink :to="'/articles/' + article.id"> Lire </ButtonLink>
    </div>
</template>

<script>
import SubjectLink from '@/components/SubjectLink';
import ButtonLink from '@/components/ButtonLink';

export default {
    components: {
        SubjectLink,
        ButtonLink,
    },
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
