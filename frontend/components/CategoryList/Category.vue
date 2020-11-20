<template>
    <NuxtLink :to="`/categories/${category.id}`" class="link">
        {{ category.name }}
    </NuxtLink>
</template>

<script>
export default {
    name: 'Category',
    props: {
        category: {
            default: () => ({}),
            type: Object,
        },
    },
};
</script>
