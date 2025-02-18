<script setup lang="ts"></script>

<template>
  <div class="todo-list__wrapper">
    <TodoDashboard />
  </div>
</template>

<style lang="scss">
.todo-list__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: var(--gradient);
}
</style>
