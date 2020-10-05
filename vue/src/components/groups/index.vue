<template>
    <tile header="Groups">
        <div class="grid">
            <div class="col col_12 mb_2"
                v-for="group of groups"
                :key="group.id"
            >
                <router-link
                    :to="`/group/${group.id}`"
                    class="link"
                >{{group.caption}}</router-link>
            </div>
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
        groups: {
            type: [Array, Object],
            default: () => []
        }
    },
}
</script>