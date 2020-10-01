export default {
    /**
     * @param state
     * @param {boolean} payload
     */
    setLoading(state, payload) {
        state.loading = payload;
    },

    /**
     *
     * @param state
     * @param {Object} payload - object with groups and nodes
     * @param {Object} payload.groups - contains groups
     * @param {Object} payload.nodes - contains nodes
     */
    setGroupsNodes(state, payload) {
        state.groups = payload.groups;
        state.nodes = payload.nodes;
    }
};