<template>
    <tile header="Last Metrics">
        <barChart :chart-data="metrics"></barChart>
    </tile>
</template>
<script>
import tile from "../tile";
import barChart from "../barChart";

export default {
    props: {
        metrics: {
            type: Object,
            required: true
        }
    },
    components: {
        tile,
        barChart
    },
}
</script>