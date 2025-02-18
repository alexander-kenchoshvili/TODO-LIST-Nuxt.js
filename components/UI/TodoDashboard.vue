<script setup lang="ts"></script>

<template>
  <div class="todo-list__dashboard">
    <div class="todo-list__theme-controller">
      <ClientOnly>
        <ToggleMode />
      </ClientOnly>
    </div>
    <div class="todo-list__top">
      <img
        class="todo-list__image"
        src="../../assets/images/Illustration.png"
        alt="todo"
      />
      <h1 class="todo-list__title text-bold">Today I need to</h1>
    </div>
  </div>
</template>

<style lang="scss">
.todo-list {
  &__dashboard {
    width: 730px;
    height: 719px;
    background-color: var(--color-bg);
    border-radius: 24px;
    padding: 32px 0;
    position: relative;
    overflow: hidden;
  }
  &__theme-controller {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 16px;
    transform: translateY(20px);
    opacity: 0;
    @include fadeUp(500ms, 20px, 500ms);
  }
  &__top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__title {
    font-size: 24px;
    margin-top: 48px;
  }
}
</style>
