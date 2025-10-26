<template>

<label
  class="f-r p-x-8 p-y-6 ga-8 ra-8"
  :class="`${color}${outline? '-outline':''} ${text}`"
  :for="id"
>
  <input
    :type="type"
    :pattern="pattern"
    :required="required"
    :id="id"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown="handleKeydown"
    placeholder=""
  >
  <slot><span>Input text</span></slot>
</label>

</template>
<script setup lang="ts">
import type { Typography } from './props';

interface Props {
  color?: "white"|"black";
  text?: Typography,
  type?: "text"|"password"|"email"|"tel"|"number"|"url"|"search",
  outline?: boolean,
  id?: string,
  required?: boolean,
  pattern?: string,
  name?: string,
  modelValue?: string | number
}
interface Emits {
  (e: 'update:modelValue', value: string | number): void
  (e: 'blur', event: Event): void
  (e: 'focus', event: Event): void
  (e: 'keydown', event: KeyboardEvent): void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(),
{
  color: "white",
  text: "b-4",
  type: "text",
  outline: false,
  required: false,
  modelValue: ''
});

const emit = defineEmits<Emits>();

const handleInput = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
const handleBlur = (event: Event): void => {
  emit('blur', event);
}
const handleFocus = (event: Event): void => {
  emit('focus', event);
}
const handleKeydown = (event: KeyboardEvent): void => {
  emit('keydown', event);
}

</script>
<style scoped lang="scss">
@use 'sass:list';
@use '../styles/mixins.scss' as *;
@use '../styles/variables.scss' as *;

$component: (
  "white": ("white", "gray-1", "black", "gray-3"),
  "black": ("black", "gray-3", "white", "gray-1")
);
%component-base {
  @extend .c-text;
  input {
    width: calc(100% - 16*$n);
    @extend .transparent, .pos-absolute;
    font: inherit;
    max-height: min-content;
    color: inherit;
  }
  span {
    @extend .pos-absolute;
  }
  min-height: calc(1em + 12*$n);
  &:has(input:not(:placeholder-shown)), &:focus-within {
    span {
      @extend
        .b-6,
        .m-left-4m;
      transform: translateY(calc(-1em - 10*$n))
    }
  }
}
.component {
  @extend %component-base;
  &:focus-within, &:focus-within:has(input:not(:placeholder-shown)) {
    @extend .bg-accent;
    span {
      @extend .color-accent;
    }
    &:hover {
      @extend .bg-accent;
      span {
        @extend .color-accent;
      }
    }
  }
}
.component-outline {
  @extend %component-base;
  &:focus-within, &:focus-within:has(input:not(:placeholder-shown)) {
    @extend .outline-accent;
    @extend .color-accent;
    span {
      @extend .color-accent;
    }
    &:hover {
      @extend .outline-accent;
      span {
        @extend .color-accent;
      }
    }
  }
}
@each $name, $colors in $component {
  .#{$name} {
    @extend .component,
      .bg-#{list.nth($colors, 1)},
      .color-#{list.nth($colors, 3)};

    &:hover {
      @extend
        .bg-#{list.nth($colors, 2)},
        .color-#{list.nth($colors, 4)};
    }

    &:has(input:not(:placeholder-shown)) {
      span {
        @extend .color-#{list.nth($colors, 1)};
      }
      &:hover {
        span {
          @extend .color-#{list.nth($colors, 2)};
        }
      }
    }
    &:focus-within {
      @extend
        .color-#{list.nth($colors, 3)};
    }
  }
  .#{$name}-outline {
    @extend .component-outline, .outline-base,
      .outline-#{list.nth($colors, 1)},
      .color-#{list.nth($colors, 1)};

    &:hover {
      @extend
        .outline-#{list.nth($colors, 2)},
        .color-#{list.nth($colors, 2)};
    }

    &:has(input:not(:placeholder-shown)) {
      span {
        @extend .color-#{list.nth($colors, 1)};
      }
      &:hover {
        span {
          @extend .color-#{list.nth($colors, 2)};
        }
      }
    }
    &:focus-within {
      @extend
        .color-#{list.nth($colors, 1)};
    }
  }
}

</style>
