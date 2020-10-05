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
            <tile header="Not found" class="mb_3">
                <p class="font_center font_header mb_3">404</p>
                <p class="font_center font_header">Page not Found</p>
            </tile>
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
import metricsFewNodes from "@/components/metricsFewNodes";

export default {
    components: {
        tile,
        groups,
        metricsFewNodes
    },
    computed: {
        ...mapGetters(["getGroups", "getLastAllMetrics"]),
    }
}
</script>