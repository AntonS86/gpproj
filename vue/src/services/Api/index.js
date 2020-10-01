import axios from "axios";

/**
 * this module contain all request for server
 * @namespace Api
 */
const Api = {
    /**
     * get all groups with nodes
     * @return {Promise<AxiosResponse<Object[]>>} contains object with nodes information
     */
    getGroups() {
        return axios.get("/api/groups")
            .then(res => res.data);
    },

    /**
     * get metrics
     * @return {Promise<AxiosResponse<Object[]>>} contains object with metrics information
     */
    getMetrics() {
        return axios.get("/api/metrics")
            .then(res => res.data);
    }
};
export default Api;