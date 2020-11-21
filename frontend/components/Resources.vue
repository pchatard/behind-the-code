<template>
    <aside class="resources">
        <h4 class="resources__title">Sources and useful links</h4>
        <ol class="resources__list">
            <li
                v-for="resource in resources"
                :key="resource.id"
                class="resources__list__item"
            >
                <ArticleResource :resource="resource" />
            </li>
        </ol>
    </aside>
</template>

<script>
import ArticleResource from '@/components/ArticleResource';
export default {
    components: {
        ArticleResource,
    },
    props: {
        resources: { default: () => [], type: Array },
    },
};
</script>
