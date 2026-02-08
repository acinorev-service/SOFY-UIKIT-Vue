<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    variant: {
        type: String as PropType<'solid' | 'outline'>,
        default: 'solid',
    }
});
</script>

<template>
    <input class="input" :class="[props.variant]" :disabled="props.disabled">
        <slot />
    </input>
</template>

<style scoped>
.input {
    outline: none;
    border: none;

    background-color: transparent;

    transition: all 0.4s;

    padding: 5px 5px;
    border-radius: 5px;
}

.solid {
    border: 1px solid color-mix(in srgb, var(--sofy-secondary-color) 100%, black 30%);
}

@media (prefers-color-scheme: dark) {
    .solid {
        color: var(--sofy-primary-color);
        border: 1px solid color-mix(in srgb, var(--sofy-secondary-color) 100%, white 70%);
    }
}
</style>