<template>
    <tile header="Administrator">
        <div class="grid">
            <div class="col col_6 mb_2">Firstname</div>
            <div class="col col_6 mb_2 font_right">{{user.firstname}}</div>
            <div class="col col_6 mb_2">Lastname</div>
            <div class="col col_6 mb_2 font_right">{{user.lastname}}</div>
            <div class="col col_6 mb_2">Email</div>
            <div class="col col_6 mb_2 font_right">
                <a class="link" :href="`mailto:${user.email}`">{{user.email}}</a>
            </div>
        </div>
    </tile>
</template>
<script>
import tile from "../tile";
import User from "@/models/User";
export default {
    components: {
        tile,
    },
    props: {
        user: {
            type: User,
            default: () => {}
        }
    },
}
</script>