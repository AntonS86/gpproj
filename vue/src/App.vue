<template>
    <div class="app">
        <v-header/>
        <v-main>
            main
        </v-main>
        <v-footer/>
    </div>
</template>

<script>
import vHeader from "./components/header";
import vMain from "./components/main";
import vFooter from "./components/footer";

export default {
    name: "app",
    components: {
        vHeader,
        vMain,
        vFooter
    },
    data() {
        return {};
    },
    methods: {

    },
    computed: {}
};
</script>
