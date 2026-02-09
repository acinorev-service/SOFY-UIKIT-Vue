<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    variant: {
        type: String as PropType<'solid' | 'outline' | 'borderless'>,
        default: 'solid',
    }
});
</script>

<template>
    <button class="button" :class="[props.variant]" :disabled="props.disabled">
        <slot name="left-icon" />
        <slot />
        <slot name="right-icon" />
    </button>
</template>

<style scoped>
.button {
    color: var(--sofy-secondary-color);
    outline: none;
    border: none;
    padding: 10px 25px;

    border-radius: 8px;

    transition: all 0.4s;
    cursor: pointer;
}

.borderless {
    color: var(--sofy-primary-color);
    background-color: transparent;
}

.borderless:hover {
    color: var(--sofy-secondary-color);
    background-color: var(--sofy-primary-color);
}

.solid {
    background-color: var(--sofy-primary-color);
}

.solid:hover {
    background-color: color-mix(in srgb, var(--sofy-primary-color) 100%, white 20%);
}

.outline {
    color: var(--sofy-primary-color);
    border: 1px solid color-mix(in srgb, var(--sofy-primary-color) 100%, black 70%);
    background-color: transparent;
}

.outline:hover {
    background-color: color-mix(in srgb, var(--sofy-secondary-color) 100%, black 20%);
}

@media (prefers-color-scheme: dark) {
    .solid:hover {
        background-color: color-mix(in srgb, var(--sofy-primary-color) 100%, black 80%);
    }

    .outline {
        color: var(--sofy-primary-color);
        border: 1px solid color-mix(in srgb, var(--sofy-primary-color) 100%, black 100%);
        background-color: transparent;
    }

    .outline:hover {
        background-color: color-mix(in srgb, var(--sofy-secondary-color) 100%, white 50%);
    }
}
</style>