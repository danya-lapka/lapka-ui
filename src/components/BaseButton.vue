<template>

<button
  class="f-r p-x-8 p-y-4 ga-8 ra-8"
  :class="`${color}${outline? '-outline':''} ${text}`"
  :type="type"
  @click="handleClick"
>
  <slot></slot>
</button>

</template>
<script setup lang="ts">
import type { Typography } from './props';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<{
  color?: "white"|"white-accent"|"black"|"black-accent"|"accent"|"accent-alt";
  text?: Typography,
  type?: "button"|"reset"|"submit",
  outline?: boolean
}>(),
{
  color: "white",
  text: "b-4",
  type: "button",
  outline: false
});

const emit = defineEmits<{
  click: [void]
}>();
function handleClick() {
  emit('click');
}

</script>
<style scoped lang="scss">
@use 'sass:list';
@use '../styles/mixins.scss' as *;

$component: (
  "white": ("white", "gray-1", "black", "gray-3"),
  "white-accent": ("white", "accent", "black", "black"),
  "black": ("black", "gray-3", "white", "gray-1"),
  "black-accent": ("black", "accent", "white", "white"),
  "accent": ("accent", "accent-1", "black", "gray-3"),
  "accent-alt": ("accent", "accent-3", "white", "gray-1")
);
.component {
  &:active {
    transform: scale(0.95);
  }
}
@each $name, $colors in $component {
  .#{$name} {
    @extend .component,
      .bg-#{list.nth($colors, 1)},
      .color-#{list.nth($colors, 3)},
      .c-pointer;

    &:hover {
      @extend
        .bg-#{list.nth($colors, 2)},
        .color-#{list.nth($colors, 4)};
    }
  }
  .#{$name}-outline {
    @extend .component,
      .transparent,
      .outline-base,
      .outline-#{list.nth($colors, 1)},
      .color-#{list.nth($colors, 1)},
      .c-pointer;

    &:hover {
      @extend
        .outline-#{list.nth($colors, 2)},
        .color-#{list.nth($colors, 2)};
    }
  }
}

</style>
