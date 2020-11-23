<template>
    <header class="header">
        <div class="header__container">
            <NuxtLink to="/" class="header__logo">
                <img src="@/assets/btc-inline-logo.png" alt="Blog logo" />
            </NuxtLink>

            <nav v-show="showNavbar" class="header__navbar">
                <ul>
                    <li
                        v-for="category in categories"
                        :key="category.id"
                        @click="toggleNavbar"
                    >
                        <NuxtLink :to="'/categories/' + category.id">
                            {{ category.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <Hamburger :checked="showNavbar" @hamburger="toggleNavbar" />
        </div>
    </header>
</template>

<script>
export default {
    props: {
        categories: { default: () => [], type: Array },
    },
    data() {
        return {
            showNavbar: false,
            isMobileView: false,
        };
    },
    mounted() {
        window.addEventListener('load', this.initializeNavbar);
        window.addEventListener('resize', this.initializeNavbar);
    },
    methods: {
        initializeNavbar() {
            this.isMobileView = window.innerWidth <= 900;
            this.showNavbar = !this.isMobileView;
        },
        toggleNavbar() {
            if (this.isMobileView) {
                this.showNavbar = !this.showNavbar;
            }
        },
    },
};
</script>
