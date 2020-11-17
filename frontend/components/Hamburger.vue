<template>
    <div class="hamburger">
        <input
            id="hamburger-state"
            type="checkbox"
            @change="$emit('hamburger')"
        />
        <label for="hamburger-state" class="hamburger__button">
            <span class="hamburger__button__line"></span>
            <span class="hamburger__button__line"></span>
            <span class="hamburger__button__line"></span>
        </label>
    </div>
</template>
