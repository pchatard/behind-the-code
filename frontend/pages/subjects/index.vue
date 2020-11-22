<template>
    <main class="subjects">
        <h1 class="subjects__title">Thèmes</h1>
        <div class="subjects__list">
            <SubjectListLink
                v-for="subject in subjects"
                :key="subject.id"
                :subject="subject"
            />
        </div>
    </main>
</template>

<script>
import SubjectListLink from '@/components/SubjectListLink';

export default {
    components: { SubjectListLink },
    computed: {
        subjects() {
            return this.$store.state.subjects.list;
        },
    },
    head() {
        return {
            title: `Thèmes - Behind The Code`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        "Découvrez les thèmes sur lesquels j'écris sur Behind The Code.",
                },
            ],
        };
    },
};
</script>
