<template>
    <div class="grid">
        <div class="col_3">
            <tile>
                <template #header>Status</template>
                Status nodes
            </tile>
            <tile>
                <template #header>Groups</template>
                Groups node
            </tile>
        </div>
        <div class="col_6">
            <tile>
                <template #header>Nodes</template>
                Node
            </tile>
        </div>
        <div class="col_3">
            <tile>
                <template #header>Charts</template>
                Chart
            </tile>
            <tile>
                <template #header>Users</template>
                User
            </tile>
        </div>
    </div>
</template>
<script>
import tile from "../tile"
export default {
    components: {
        tile
    }
}
</script>