<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="base-button">
    <button class="base-button__inner text-semibold">{{ text }}</button>
  </div>
</template>

<style lang="scss">
.base-button {
  &__inner {
    font-size: 13px;
    line-height: 16px;
    background-color: var(--button-bg);
    color: white;
    text-transform: capitalize;
    padding: 12px 16px;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;
    @include ease(300, all);
    &:hover {
      background-color: var(--button-hover);
    }
  }
}
</style>
