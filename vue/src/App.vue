<template>
    <div class="app">
        <v-header/>
        <v-main>
            <container>
                <router-view></router-view>
            </container>
        </v-main>
        <v-footer/>
    </div>
</template>

<script>
import vHeader from "./components/header";
import vMain from "./components/main";
import vFooter from "./components/footer";
import container from "./components/container";

export default {
    name: "app",
    components: {
        vHeader,
        vMain,
        vFooter,
        container,
    },
    data() {
        return {};
    },
    methods: {

    },
    computed: {}
};
</script>
