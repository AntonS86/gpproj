import Api from "@/services/Api";
import {nodesNormalize, metricsNormalize} from "@/services/helpers";
import errorHandler from "../services/errorHandler";

export default {
    /**
     *
     * @param commit
     * @returns {Promise<void>}
     */
    async fetchData({commit}) {
        try {
            const groupsAndNodes = Api.getGroups();
            const metrics = Api.getMetrics();

            const [responseGroupsAndNodes, responseMetrics] = await Promise.all([groupsAndNodes, metrics]);
            const normolizeData = {
                ...nodesNormalize(responseGroupsAndNodes),
                metrics: metricsNormalize(responseMetrics),
            }

            commit("setGroupsNodes", normolizeData)
        } catch (e) {
            errorHandler(e);
        }
    }
};