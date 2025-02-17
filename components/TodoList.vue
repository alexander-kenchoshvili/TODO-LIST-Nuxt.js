<script setup lang="ts"></script>

<template>
  <div class="todo-list__wrapper">
    <ClientOnly>
      <ToggleMode />
    </ClientOnly>
  </div>
</template>

<style lang="scss">
.todo-list__wrapper {
  width: 100%;
  height: 100vh;
  background-image: var(--gradient);
}
</style>
