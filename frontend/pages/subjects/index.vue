<template>
    <main class="subjects">
        <h1 class="subjects__title">Subjects</h1>
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
            title: `Subjects - Behind The Code`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Discover the subjects I am talking about in Behind The Code',
                },
            ],
        };
    },
};
</script>
