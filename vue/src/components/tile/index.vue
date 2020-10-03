<template>
    <div class="tile">
        <div class="tile__header">
            <slot name="header"></slot>
        </div>
        <div class="tile__content">
            <slot/>
        </div>
        <div class="tile__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
export default {};
</script>