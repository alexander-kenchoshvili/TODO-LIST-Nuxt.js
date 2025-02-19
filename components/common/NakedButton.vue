<script setup lang="ts">
withDefaults(
  defineProps<{
    btnText: string;
    active?: boolean;
    hideButton?: boolean;
  }>(),
  {
    btnText: 'all',
    active: false,
    hideButton: false,
  }
);
</script>

<template>
  <button
    class="naked-button text-semibold"
    :class="{
      'naked-button--active': active,
      'naked-button--hidden': hideButton,
    }"
  >
    {{ btnText }}
  </button>
</template>

<style lang="scss">
.naked-button {
  background: none;
  color: var(--color-text);
  border: none;
  outline: none;
  padding: 8px 12px;
  font-size: 13px;
  line-height: 16px;
  border-radius: 8px;
  text-transform: capitalize;
  cursor: pointer;
  @include easeInOut(300ms, all);

  &:hover {
    background-color: var(--button-bg);
    color: #fff;
  }
  &--active {
    background-color: var(--button-bg);
    color: #fff;
  }
  &--hidden {
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
