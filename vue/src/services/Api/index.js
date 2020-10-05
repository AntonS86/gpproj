import axios from "axios";

/**
 * this module contain all request for server
 * @namespace Api
 */
const Api = {
    /**
     * get all groups with nodes
     * @return {Promise<GroupsWithNodes[]>} contains nodes information
     */
    getGroups() {
        return axios.get("/api/groups")
            .then(res => res.data);
    },

    /**
     * get metrics
     * @return {Promise<MetricResponse[]>} contains metrics information
     */
    getMetrics() {
        return axios.get("/api/metrics")
            .then(res => res.data);
    }
};
export default Api;