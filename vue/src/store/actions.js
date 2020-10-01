import Api from "@/services/Api";
import {nodesNormalize,} from "@/services/helpers";

export default {
    async fetchNodes({commit}) {
        try {
            const groupsAndNodes = await Api.getGroups();
            const normalizeGroupsAndNodes = nodesNormalize(groupsAndNodes);
            console.log(normalizeGroupsAndNodes)
            commit("setGroupsNodes", normalizeGroupsAndNodes)
        } catch (e) {
            console.log(e);
        }
    }
};