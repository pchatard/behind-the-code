const state = () => ({
    articles: [],
});

const getters = {
    articles: (state) => state.articles,
    articleId: (state) => (id) => {
        return state.articles.find((art) => {
            return art.id === parseInt(id);
        });
    },
};

const actions = {
    async getArticles({ commit }) {
        const articles = await this.$axios.$get('/articles');
        commit('populateArticles', articles);
    },
};
const mutations = {
    populateArticles(state, articles) {
        state.articles = articles;
    },
};

export default { state, getters, actions, mutations };
