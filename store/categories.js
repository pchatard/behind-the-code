const state = () => ({ list: [] });

const actions = {
    async getCategories({ commit }) {
        const categories = await this.$axios.$get('/categories');
        categories.forEach((cat) =>
            cat.articles.sort((a, b) => {
                const aDate = new Date(a.published_at).getTime();
                const bDate = new Date(b.published_at).getTime();
                return bDate - aDate;
            })
        );
        commit('populateCategories', categories);
    },
};
const mutations = {
    populateCategories(state, categories) {
        state.list = categories;
    },
};

export default { state, actions, mutations };
