<template>
    <p class="article__info">
        Par <strong>Pierre Chatard</strong>, le {{ formatedDate }}
    </p>
</template>

<script>
export default {
    props: {
        publishedDate: {
            default: () => new Date(),
            type: String,
        },
    },
    computed: {
        formatedDate() {
            const date = new Date(this.publishedDate);
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
    },
};
</script>
