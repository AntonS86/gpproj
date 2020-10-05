<template>
    <div class="grid">
        <div class="col_3">
            <tile header="Status" class="mb_3">
                Status nodes
            </tile>
            <tile header="Information" class="mb_3">
                Information
            </tile>
            <groups
                class="mb_3"
                :groups="getGroups"
            ></groups>
        </div>
        <div class="col_6">
            <nodes
                class="mb_3"
                :nodes="getNodes"
            ></nodes>
        </div>
        <div class="col_3">
            <metricsFewNodes class="mb_3" :metrics="getLastAllMetrics"></metricsFewNodes>
            <tile header="Interfaces" class="mb_3">
                User
            </tile>
            <tile header="Administrators" class="mb_3">
                User
            </tile>
        </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex";
import tile from "@/components/tile";
import groups from "@/components/groups";
import nodes from "@/components/nodes";
import metricsFewNodes from "@/components/metricsFewNodes";

export default {
    components: {
        tile,
        groups,
        nodes,
        metricsFewNodes
    },
    computed: {
        ...mapGetters(["getGroups", "getNodes", "getLastAllMetrics"]),
    }
}
</script>