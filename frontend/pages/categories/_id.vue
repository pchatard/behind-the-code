<template>
    <main class="category">
        <h1 class="category__title">
            {{ category.name }}
        </h1>
        <div class="category__links">
            <div class="articles">
                <h2>Latest Articles</h2>
                <ul>
                    <li
                        v-for="article in category.articles"
                        :key="article.id"
                        class="article"
                    >
                        <NuxtLink :to="'/articles/' + article.id">
                            {{ article.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="subjects">
                <h2>Subjects</h2>
                <ul>
                    <li
                        v-for="subject in category.subjects"
                        :key="subject.id"
                        class="subject__li"
                    >
                        <NuxtLink
                            :to="'/subjects/' + subject.id"
                            class="subject__link"
                        >
                            {{ subject.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
        };
    },
    computed: {
        category() {
            return this.$store.state.categories.list.find(
                (cat) => cat.id === parseInt(this.id)
            );
        },
    },
};
</script>
