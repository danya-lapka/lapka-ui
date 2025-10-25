<script setup lang="ts">

import { BaseButton, BaseLink, BaseTooltip } from './components';

</script>

<template>
  <div class="f-r ga-32 a-start bg-gray-2 pa-64">
    <div class="f-r ga-16">
      <div class="f-c ga-12">
        <h1 class="h-1">Heading 1</h1>
        <h2 class="h-2">Heading 2</h2>
        <h3 class="h-3">Heading 3</h3>
        <h4 class="h-4">Heading 4</h4>
      </div>
      <div class="f-c ga-12">
        <p class="b-1">Body 1</p>
        <p class="b-2">Body 2</p>
        <p class="b-3">Body 3</p>
        <p class="b-4">Body 4</p>
        <p class="b-5">Body 5</p>
        <p class="b-6">Body 6</p>
      </div>
    </div>
    <div class="f-r ga-16">
      <div class="f-c ga-12">
        <BaseButton color="white" />
        <BaseButton color="white-accent" />
        <BaseButton color="black" />
        <BaseButton color="black-accent" />
        <BaseButton color="accent" />
        <BaseButton color="accent-alt" />
      </div>
      <div class="f-c ga-12">
        <BaseButton outline color="white" />
        <BaseButton outline color="white-accent" />
        <BaseButton outline color="black" />
        <BaseButton outline color="black-accent" />
        <BaseButton outline color="accent" />
        <BaseButton outline color="accent-alt" />
      </div>
    </div>
    <div class="f-c ga-12">
      <BaseLink href="#" color="white" />
      <BaseLink href="#" color="white-accent" />
      <BaseLink href="#" color="black" />
      <BaseLink href="#" color="black-accent" />
      <BaseLink href="#" color="accent" />
      <BaseLink href="#" color="accent-alt" />
    </div>
    <div class="f-c ga-12">
      <BaseTooltip class="b-4" color="success" side="top" />
      <BaseTooltip class="b-4" color="warn" side="bottom" />
      <BaseTooltip class="b-4" color="error" side="left" />
      <BaseTooltip class="b-4" color="info" side="right" />
    </div>
  </div>
</template>

<style scoped></style>
