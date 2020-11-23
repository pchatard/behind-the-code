<template>
    <NuxtLink
        :to="`/categories/${subject.category.id}?subjects=${subject.id}`"
        class="link"
    >
        {{ subject.title }}
    </NuxtLink>
</template>

<script>
export default {
    props: {
        subject: {
            default: () => ({}),
            type: Object,
        },
    },
};
</script>
