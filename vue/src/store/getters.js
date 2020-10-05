export default {
    /**
     * get all groups
     * @param {Object} state
     * @returns {Object}
     */
    getGroups(state) {
        return state.groups;
    },

    getGroupByNodeId(state) {
        return (id) => {
            const groupsIds = state.nodes[id].groups;
            return Array.from(groupsIds).map((id) => state.groups[id]);
        }
    },

    /**
     * checking if there is a group
     * @param {Object} state
     * @returns {function(number): boolean}
     */
    isGroupById(state) {
        return (id) => {
            return !!state.groups[id];
        };
    },

    /**
     * get all nodes
     * @param {Object} state
     * @returns {Object}
     */
    getNodes(state) {
        return state.nodes;
    },

    /**
     * get node by id
     * @param state
     * @returns {function(number): Node}
     */
    getNodeById(state) {
        return (id) => {
            return state.nodes[id];
        }
    },

    /**
     *
     * @param state
     * @returns {function(number): boolean}
     */
    isNodeById(state) {
        return (id) => {
            return !!state.nodes[id];
        }
    },

    /**
     * get Nodes By Group Id
     * @param {Object} state
     * @returns {function(number): Node[]}
     */
    getNodesByGroupId(state) {
        return (id) => {
            const nodeIds = state.groups[id].nodes;
            return Array.from(nodeIds).map((id) => state.nodes[id]);
        }
    },

    /**
     * get all metrics
     * @param state
     * @returns {Object.<number, Metric[]>}
     */
    getMetrics(state) {
        return state.metrics;
    },

    /**
     * get last metric by node id
     * @param state
     * @returns {function(number): Metric}
     */
    getLastMetric(state) {
        return (nodeId) => {
            const metrics = state.metrics[nodeId];
            return metrics[metrics.length - 1];
        };
    },

    /**
     * get metrics by node id
     * @param state
     * @returns {function(number): Object}
     */
    getMetricsByNodeId(state) {
        return (id) => {
            const meta = {
                cpu_utilization: [],
                disk_utilization: [],
                memory_utilization: [],
                labels: []
            };
            return state.metrics[id].reduce((acc, el) => {
                acc.cpu_utilization.push(el.cpu_utilization);
                acc.disk_utilization.push(el.disk_utilization);
                acc.memory_utilization.push(el.memory_utilization);
                acc.labels.push(el.datetime);
                return acc;
            }, meta);
        };
    },

    /**
     *
     * @param {Object} state
     * @param {Object} getters
     * @returns {Object}
     */
    getLastAllMetrics(state, getters) {
        const meta = {
            cpu_utilization: [],
            disk_utilization: [],
            memory_utilization: [],
            labels: []
        };
        return Object.values(state.nodes).reduce((acc, el) => {
            const lastMetric = getters.getLastMetric(el.id);
            acc.labels.push(el.caption);
            acc.cpu_utilization.push(lastMetric.cpu_utilization);
            acc.disk_utilization.push(lastMetric.disk_utilization);
            acc.memory_utilization.push(lastMetric.memory_utilization);
            return acc;
        }, meta);
    },

    getLastMetricsByGroupId(state, getters) {
        return (id) => {
            const nodes = getters.getNodesByGroupId(id);

            const meta = {
                cpu_utilization: [],
                disk_utilization: [],
                memory_utilization: [],
                labels: []
            };

            return nodes.reduce((acc, el) => {
                const lastMetric = getters.getLastMetric(el.id);
                acc.labels.push(el.caption);
                acc.cpu_utilization.push(lastMetric.cpu_utilization);
                acc.disk_utilization.push(lastMetric.disk_utilization);
                acc.memory_utilization.push(lastMetric.memory_utilization);
                return acc;
            }, meta);
        }
    }
};