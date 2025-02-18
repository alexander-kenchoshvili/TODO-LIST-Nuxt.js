<script setup lang="ts">
import BottomIcon from '@/assets/icons/BottomIcon.vue';

const taskStore = useTaskStore();
</script>

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
    <div class="todo-list__input-wrapper">
      <BaseInput
        v-model="taskStore.newTask"
        @submit="taskStore.addTask"
        placeholder="Add new todo..."
      />
      <Transition name="fade">
        <BaseButton
          @click="taskStore.addTask"
          v-if="taskStore.newTask"
          text="submit"
        />
      </Transition>
    </div>
    <TaskList />
    <div v-if="!taskStore.tasks.length" class="todo-list__bottom">
      <BottomIcon class="todo-list__bottom--icon" />
      <p class="todo-list__bottom--text">
        Congrat, you have no more tasks to do
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.todo-list {
  &__dashboard {
    display: flex;
    flex-direction: column;
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
    line-height: 29px;
    margin-top: 48px;
    @include ease(300, all);
  }
  &__input-wrapper {
    margin-top: 52px;
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  &__bottom {
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    &--text {
      font-size: 14px;
      line-height: 16px;
      color: var(--input-placeholder);
      @include ease(300, all);
    }
    &--icon {
      width: 18px;
      height: 18px;
      path {
        stroke: var(--input-placeholder);
        @include ease(300, all);
      }
    }
  }
}
</style>
