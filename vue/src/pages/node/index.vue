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
            <port class="mb_3" :port="port"></port>
            <user class="mb_3" :user="user"></user>
            <applications :applications="applications"></applications>
        </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex";
import tile from "@/components/tile";
import groups from "@/components/groups";
import nodes from "@/components/nodes";
import metricsNode from "@/components/metricsNode";
import user from "@/components/user";
import applications from "@/components/applications";
import port from "@/components/port"

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
        metricsNode,
        user,
        applications,
        port
    },
    computed: {
        ...mapGetters([
            "getGroupByNodeId",
            "getNodeById",
            "getMetricsByNodeId",
            "getUserByNodeId",
            "getApplicationsByNodeId",
            "getPortByNodeId"
        ]),
        nodes() {
            return [this.getNodeById(this.nodeId)];
        },
        groups() {
            return this.getGroupByNodeId(this.nodeId);
        },
        metrics() {
            return this.getMetricsByNodeId(this.nodeId);
        },
        user() {
            return this.getUserByNodeId(this.nodeId);
        },

        applications() {
            return this.getApplicationsByNodeId(this.nodeId);
        },

        port() {
            return this.getPortByNodeId(this.nodeId);
        }
    },
};
</script>