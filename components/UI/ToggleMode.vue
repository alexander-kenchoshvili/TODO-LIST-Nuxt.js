<script setup lang="ts">
import DARK from '~/assets/icons/DARK.vue';
import LIGHT from '~/assets/icons/LIGHT.vue';

const { $isDarkMode: isDarkMode, $toggleTheme: toggleTheme } = useNuxtApp();
const mode = computed(() => isDarkMode.value);
</script>

<template>
  <div
    class="todo-mode__switcher"
    :class="{
      'todo-mode__switcher--dark-mode': isDarkMode,
      'todo-mode__switcher--light-mode': !isDarkMode,
    }"
    @click="toggleTheme"
  >
    <LIGHT class="todo-mode__light" />
    <DARK class="todo-mode__dark" />
  </div>
</template>

<style lang="scss">
.todo-mode {
  &__switcher {
    display: flex;
    background-color: var(--switcher-bg);
    border-radius: 999px;
    position: relative;
    height: 36px;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: rgba(246, 142, 32, 1);
      top: 0;
      left: 0;
      @include easeInOut(300ms, all);
    }
    &--dark-mode {
      &::before {
        transform: translateX(100%);
        background-color: rgba(79, 105, 149, 1);
      }
    }
  }
  &__light {
    position: relative;
    svg {
      > rect {
        fill: rgb(246, 142, 32, 0);
      }
    }
  }
  &__dark {
    position: relative;
    svg {
      > rect {
        fill: rgba(79, 105, 149, 0);
      }
    }
  }
}
</style>
