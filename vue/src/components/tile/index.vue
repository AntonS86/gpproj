<template>
    <div class="tile">
        <div v-if="isSlotHeader" class="tile__header">
            <slot name="header">
                <p class="font_center">{{header}}</p>
            </slot>
        </div>
        <div class="tile__content">
            <slot/>
        </div>
        <div v-if="isSlotFooter" class="tile__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        header: {
            type: String,
            default: '',
        }
    },
    computed: {
        isSlotHeader() {
            return !!this.header || !!this.$slots.header;
        },
        isSlotFooter() {
            return !!this.$slots.footer;
        }
    },
};
</script>