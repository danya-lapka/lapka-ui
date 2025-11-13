<template>
  <component :is="iconComponent" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed, type Component } from 'vue';

interface Props {
  name: string;
}

const props = defineProps<Props>();

const iconComponent = computed<Component | null>(() => {
  try {
    return defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.warn(`SVG icon "${props.name}" not found`);
    return null;
  }
});
</script>
