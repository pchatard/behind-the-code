const state = () => ({
    list: [],
});

const actions = {
    async getArticles({ commit }) {
        const rawArticles = await this.$axios.$get(
            '/articles?_sort=published_at:DESC'
        );
        const articles = (await rawArticles).map((article) => ({
            ...article,
            content: this.$md.render(
                article.content
                    .split('/uploads')
                    .join(`${process.env.strapiBaseUrl}/uploads`)
            ),
        }));
        // articles.sort((a, b) => {
        //     const aDate = new Date(a.published_at).getTime();
        //     const bDate = new Date(b.published_at).getTime();
        //     return bDate - aDate;
        // });
        commit('populateArticles', await articles);
    },
};
const mutations = {
    populateArticles(state, articles) {
        state.list = articles;
    },
};

export default { state, actions, mutations };
