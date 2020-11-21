<template>
    <div class="hamburger">
        <input
            id="hamburger-state"
            type="checkbox"
            :checked="checked"
            @change="$emit('hamburger')"
        />
        <label for="hamburger-state" class="hamburger__button">
            <span class="hamburger__button__line"></span>
            <span class="hamburger__button__line"></span>
            <span class="hamburger__button__line"></span>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        checked: {
            default: () => false,
            type: Boolean,
        },
    },
};
</script>
