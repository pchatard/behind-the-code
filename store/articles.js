const state = () => ({
    list: [],
});

const actions = {
    async getArticles({ commit }) {
        const articles = await this.$axios.$get(
            '/articles?_sort=published_at:DESC'
        );
        commit('populateArticles', await articles);
    },
};
const mutations = {
    populateArticles(state, articles) {
        state.list = articles;
    },
};

export default { state, actions, mutations };
