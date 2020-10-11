<template>
    <tile header="Interface">
        <div class="grid">
            <div class="col col_6 mb_2">Caption</div>
            <div class="col col_6 mb_2 font_right">{{port.caption}}</div>
            <div class="col col_6 mb_2">Description</div>
            <div class="col col_6 mb_2 font_right">
                <p :style="{backgroundColor: port.statusColor}">
                    {{port.statusDescription}}
                </p>
            </div>

        </div>
    </tile>
</template>
<script>
import tile from "../tile";
import Port from "@/models/Port";
export default {
    components: {
        tile,
    },
    props: {
        port: {
            type: Port,
            default: () => {}
        }
    },
}
</script>