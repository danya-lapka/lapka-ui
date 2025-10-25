<template>

<a
  class="f-r ga-4"
  :class="`${color} ${text}`"
  :href="href"
  :target="target"
>
  <slot>Link</slot>
</a>

</template>
<script setup lang="ts">
import type { Typography } from './props';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<{
  color?: "white"|"white-accent"|"black"|"black-accent"|"accent"|"accent-alt";
  text?: Typography,
  href: string,
  target?: string
}>(),
{
  color: "white",
  text: "b-4",
  target: "_self"
});

</script>
<style scoped lang="scss">
@use 'sass:list';
@use '../styles/mixins.scss' as *;

$component: (
  "white": ("white", "gray-1"),
  "white-accent": ("white", "accent"),
  "black": ("black", "gray-3"),
  "black-accent": ("black", "accent"),
  "accent": ("accent", "accent-1"),
  "accent-alt": ("accent", "accent-3")
);
@each $name, $colors in $component {
  .#{$name} {
    @extend
      .color-#{list.nth($colors, 1)},
      .c-pointer;

    &:hover {
      @extend
        .color-#{list.nth($colors, 2)};
    }
  }
}

</style>
