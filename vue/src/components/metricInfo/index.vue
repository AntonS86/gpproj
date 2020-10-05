<template>
    <div>
        <div class="grid mb_2" :class="colorIndicator(cpuUtilization)">
            <div class="col col_6">Cpu utilization</div>
            <div class="col col_6 font_right">{{ cpuUtilization }}</div>
        </div>
        <div class="grid mb_2" :class="colorIndicator(memoryUtilization)">
            <div class="col col_6">Memory utilization</div>
            <div class="col col_6 font_right">{{ memoryUtilization }}</div>
        </div>
        <div class="grid mb_2" :class="colorIndicator(diskUtilization)">
            <div class="col col_6">Disc utilization</div>
            <div class="col col_6 font_right">{{ diskUtilization }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        metric: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        /**
         * @returns {number}
         */
        cpuUtilization() {
            return this.metric["cpu_utilization"];
        },
        /**
         * @returns {number}
         */
        memoryUtilization() {
            return this.metric["memory_utilization"];
        },
        /**
         *
         * @returns {number}
         */
        diskUtilization() {
            return this.metric["disk_utilization"];
        }
    },

    methods: {

        /**
         * set css class
         * @param {number} param
         * @returns {string}
         */
        colorIndicator(param) {
            if (param > 95) {
                return "theme__error";
            } else if (param > 85) {
                return "theme__warning";
            } else {
                return "";
            }
        }
    }
};
</script>