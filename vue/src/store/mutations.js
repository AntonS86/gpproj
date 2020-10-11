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
     * @param {GroupsAndMetricsPayload} payload - object with groups and nodes
     */
    setGroupsNodes(state, payload) {
        console.log(payload)
        state.groups = payload.groups;
        state.nodes = payload.nodes;
        state.applications = payload.applications;
        state.metrics = payload.metrics;
        state.users = payload.users;
        state.ports = payload.ports;
    }
};