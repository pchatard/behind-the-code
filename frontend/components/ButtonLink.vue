<template>
    <NuxtLink :to="to" class="btn-link">
        <slot />
    </NuxtLink>
</template>

<script>
export default {
    props: {
        to: {
            default: () => '/',
            type: String,
        },
    },
};
</script>
