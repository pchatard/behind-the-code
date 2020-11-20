<template>
    <NuxtLink
        :to="'/categories/' + subject.category + '?subjects=' + subject.id"
        class="subject"
    >
        {{ subject.title }}
    </NuxtLink>
</template>

<script>
export default {
    name: 'SubjectLink',
    props: {
        subject: {
            default: () => ({}),
            type: Object,
        },
    },
};
</script>
