const state = () => ({
    list: [],
});

const actions = {
    async getArticles({ commit }) {
        const rawArticles = await this.$axios.$get('/articles');
        const articles = (await rawArticles).map((article) => ({
            ...article,
            content: this.$md.render(
                article.content
                    .split('/uploads')
                    .join(`${process.env.strapiBaseUrl}/uploads`)
            ),
        }));
        commit('populateArticles', await articles);
    },
};
const mutations = {
    populateArticles(state, articles) {
        state.list = articles;
    },
};

export default { state, actions, mutations };
