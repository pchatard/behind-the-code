const state = () => ({ categories: [] });

const getters = {
    categories: (state) => state.categories,
    categoryId: (state) => (id) => {
        return state.categories.find((cat) => {
            return cat.id === parseInt(id);
        });
    },
};

const actions = {
    async getCategories({ commit }) {
        const categories = await this.$axios.$get('/categories');
        commit('populateCategories', categories);
    },
};
const mutations = {
    populateCategories(state, categories) {
        state.categories = categories;
    },
};

export default { state, getters, actions, mutations };
