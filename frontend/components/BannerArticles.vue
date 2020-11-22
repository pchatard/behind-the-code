<template>
    <div class="banner__articles">
        <h2 class="title">Derniers articles</h2>
        <ul v-if="latestArticles.length" class="list">
            <li
                v-for="article in latestArticles"
                :key="article.id"
                class="list__item"
            >
                <NuxtLink :to="'/articles/' + article.id" class="article__link">
                    {{ article.title }}
                </NuxtLink>
            </li>
        </ul>
        <ul v-else class="list">
            <li>
                <p class="empty">Plus de contenu arrive bientôt !</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        latestArticles: {
            default: () => [],
            type: Array,
        },
    },
};
</script>
