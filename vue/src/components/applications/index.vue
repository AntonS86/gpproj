<template>
    <tile header="Applications">
        <div class="grid">
            <div
                v-for="app of applications"
                :key="app.id"
                class="col col_12 mb_2">{{app.caption}}</div>
        </div>
    </tile>
</template>
<script>
import tile from "../tile";

export default {
    components: {
        tile,
    },
    props: {
        applications: {
            type: Array,
            default: () => ([])
        }
    },
};
</script>