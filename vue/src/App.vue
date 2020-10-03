<template>
    <div class="app">
        <v-header/>
        <v-main>
            <container>
                <home/>
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
import home from "./components/home";

export default {
    name: "app",
    components: {
        vHeader,
        vMain,
        vFooter,
        container,
        home
    },
    data() {
        return {};
    },
    methods: {

    },
    computed: {}
};
</script>
