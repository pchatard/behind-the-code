<template>
    <main class="subjects">
        <h1 class="subjects__title">Subjects</h1>
        <div class="subjects__list">
            <Subject
                v-for="subject in subjects"
                :key="subject.id"
                :subject="subject"
            />
        </div>
    </main>
</template>

<script>
export default {
    computed: {
        subjects() {
            return this.$store.state.subjects.list;
        },
    },
};
</script>
