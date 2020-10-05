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
                :groups="groups"
            ></groups>
        </div>
        <div class="col_6">
            <nodes
                class="mb_3"
                :nodes="nodes"
            ></nodes>
        </div>
        <div class="col_3">
            <metricsNode class="mb_3" :metrics="metrics"></metricsNode>
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
import metricsNode from "@/components/metricsNode";

export default {
    props: {
        nodeId: {
            type: Number,
            require: true,
        }
    },
    components: {
        tile,
        groups,
        nodes,
        metricsNode
    },
    computed: {
        ...mapGetters(["getGroupByNodeId", "getNodeById", "getMetricsByNodeId"]),
        nodes() {
            return [this.getNodeById(this.nodeId)];
        },
        groups() {
            return this.getGroupByNodeId(this.nodeId);
        },
        metrics() {
            return this.getMetricsByNodeId(this.nodeId);
        }
    }
}
</script>