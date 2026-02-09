<script setup lang="ts">
const props = defineProps({
    mouseScroll: {
        type: Boolean,
        default: true,
    },
});
</script>

<template>
    <input class="carousel" @scroll.prevent="">
        <slot />
    </input>
</template>

<style scoped>
.carousel {
    display: flex;
    flex-direction: row;
}
</style>