<template>
    <a
        :href="resource.link"
        class="resource"
        target="_blank"
        rel="noopener noreferrer"
    >
        {{ resource.title }}
    </a>
</template>

<script>
export default {
    props: {
        resource: {
            default: () => ({}),
            type: Object,
        },
    },
};
</script>
