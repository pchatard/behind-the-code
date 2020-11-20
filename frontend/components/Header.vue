<template>
    <header class="header">
        <div class="header__container">
            <NuxtLink to="/" class="header__logo">
                <img src="@/assets/btc-inline-logo.png" alt="Blog logo" />
            </NuxtLink>

            <nav v-show="showNavbar" class="header__navbar">
                <!-- <form>
                    <input id="search" type="search" />
                    <button type="submit">Search</button>
                </form> -->
                <ul>
                    <li v-for="category in categories" :key="category.id">
                        <NuxtLink :to="'/categories/' + category.id">
                            {{ category.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <Hamburger @hamburger="toggleNavbar" />
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
        };
    },
    mounted() {
        window.addEventListener('load', this.initializeNavbar);
        window.addEventListener('resize', this.initializeNavbar);
    },
    methods: {
        initializeNavbar() {
            this.showNavbar = window.innerWidth >= 900;
        },
        toggleNavbar() {
            this.showNavbar = !this.showNavbar;
        },
    },
};
</script>
