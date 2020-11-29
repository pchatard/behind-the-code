const state = () => ({
    list: [],
});

const actions = {
    async getArticles({ commit }) {
        const articles = await this.$axios.$get(
            '/articles?_sort=published_at:DESC'
        );
        const newArticles = await articles.map((article) => ({
            ...article,
            content: this.$md.render(article.content),
        }));
        commit('populateArticles', newArticles);
    },
};
const mutations = {
    populateArticles(state, articles) {
        state.list = articles;
    },
};

export default { state, actions, mutations };
