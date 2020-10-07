<template>
    <tile header="Nodes">
        <table class="table table_bordered table_fixed table__col_bordered">
            <thead class="table__head table__head_sticky">
                <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Caption</th>
                    <th scope="col">Info</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="node of nodes" :key="node.id">
                    <td
                    >
                        <div class="grid" :style="{backgroundColor: node.statusColor}">
                            <div class="col_12">
                                {{node.statusDescription}}
                            </div>
                        </div>
                    <td
                        scope="row">
                        <router-link class="link" :to="`/node/${node.id}`">
                            {{node.caption}}
                        </router-link>
                    </td>
                    <td>
                        <metric-info class="" :metric="getLastMetric(node.id)"/>
                    </td>
                </tr>
            </tbody>
        </table>
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