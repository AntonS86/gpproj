<template>
    <tile header="Last Metrics">
        <lineChart :chart-data="metrics"></lineChart>
    </tile>
</template>
<script>
import tile from "../tile";
import lineChart from "../lineChart";

export default {
    props: {
        metrics: {
            type: Object,
            required: true
        }
    },
    components: {
        tile,
        lineChart
    },
}
</script>