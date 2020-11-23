const state = () => ({
    list: [],
});

const actions = {
    async getSubjects({ commit }) {
        const subjects = await this.$axios.$get('/subjects');
        commit('populateSubjects', await subjects);
    },
};
const mutations = {
    populateSubjects(state, subjects) {
        state.list = subjects;
    },
};

export default { state, actions, mutations };
