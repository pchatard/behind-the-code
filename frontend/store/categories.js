const state = () => ({ list: [] });

const actions = {
    async getCategories({ commit }) {
        const categories = await this.$axios.$get('/categories');
        commit('populateCategories', categories);
    },
};
const mutations = {
    populateCategories(state, categories) {
        state.list = categories;
    },
};

export default { state, actions, mutations };
