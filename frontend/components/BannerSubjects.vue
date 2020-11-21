<template>
    <div class="banner__subjects">
        <h2 class="title">Subjects</h2>
        <ul class="list">
            <li
                v-for="subject in subjects"
                :key="subject.id"
                class="list__item"
                :class="{ active: activeSubjectIds.includes(subject.id) }"
                @click="$emit('filter', subject.id)"
            >
                {{ subject.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        subjects: {
            default: () => [],
            type: Array,
        },
        activeSubjectIds: {
            default: () => [],
            type: Array,
        },
    },
};
</script>
