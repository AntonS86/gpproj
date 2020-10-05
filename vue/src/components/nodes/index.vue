<template>
    <tile header="Nodes">
        <div class="grid">
            <div class="col col_12 nodes-list">
                <div class="grid mb_3 nodes-list__header">
                    <div class="col col_2">Status</div>
                    <div class="col col_4">Caption</div>
                    <div class="col col_6">Info</div>
                </div>
                <div
                    class="grid mb_3 node"
                    v-for="node of nodes"
                    :key="node.id"
                >
                    <div
                        class="col col_2"
                        :style="{backgroundColor: node.statusColor}"
                    >{{node.statusDescription}}</div>
                    <div class="col col_4">
                        <router-link class="link link_stretched" :to="`/node/${node.id}`">
                            {{node.caption}}
                        </router-link>
                    </div>
                    <metric-info class="col col_6" :metric="getLastMetric(node.id)"/>
                </div>
            </div>
        </div>
    </tile>
</template>
<script>
import {mapGetters} from "vuex"
import tile from "../tile";
import MetricInfo from "../metricInfo";

export default {
    components: {
        tile,
        MetricInfo
    },
    props: {
        nodes: {
            type: [Array, Object],
            default: () => []
        }
    },
    computed: {
        ...mapGetters(["getLastMetric"]),
    }
}
</script>