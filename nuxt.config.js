export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    env: {
        strapiBaseUrl: process.env.API_URL || 'http://localhost:1337',
    },

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Behind the code',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/markdownit',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: process.env.API_URL || 'http://localhost:1337',
    },

    markdownit: {
        preset: 'commonmark',
        linkify: true,
        breaks: true,
        injected: true,
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
};
