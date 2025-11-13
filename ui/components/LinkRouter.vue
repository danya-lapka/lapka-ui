<template>

<router-link
  class="f-r fi ga-4 c-pointer"
  :class="[color, text]"
  :to="href"
  :target="target"
>
  <slot>Link</slot>
</router-link>

</template>
<script setup lang="ts">
import type { Typography } from '../types/props';

interface Props {
  color?: "white"|"white-accent"|"black"|"black-accent"|"accent"|"accent-alt";
  text?: Typography,
  href: string,
  target?: '_self' | '_blank' | '_parent' | '_top'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(),
{
  color: "white",
  text: "b-4",
  target: "_self"
});

</script>
<style scoped lang="scss">
@use 'sass:list';
@use '../styles/all.scss' as *;

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
      .color-#{list.nth($colors, 1)};

    &:hover {
      @extend
        .color-#{list.nth($colors, 2)};
    }
  }
}

</style>
