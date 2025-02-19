<script setup lang="ts">
import SortIcon from '~/assets/icons/SortIcon.vue';
import type { TaskInterface } from '~/types/ContentType';

const { $isDarkMode: isDarkMode } = useNuxtApp();
const taskStore = useTaskStore();
const sortTasks = ref(false);

const displayedTasks = ref([...taskStore.tasks]);

const updateFilteredTasks = (newTasks: TaskInterface[]) => {
  displayedTasks.value = newTasks;
};

const sortedTasks = computed(() =>
  sortTasks.value
    ? [...displayedTasks.value]
    : [...displayedTasks.value].reverse()
);
</script>

<template>
  <div class="task-list">
    <div class="task-list__content">
      <SortIcon
        @click="sortTasks = !sortTasks"
        v-if="taskStore.tasks.length > 1"
        class="task-list__sort"
        :class="{ 'task-list__sort--dark': isDarkMode }"
      />
      <div class="task-list__tasks">
        <Task v-for="task in sortedTasks" :key="task.id" :task="task" />
      </div>
    </div>
    <ProgressBar />

    <TaskFilter @update:filteredTasks="updateFilteredTasks" />
  </div>
</template>

<style lang="scss">
.task-list {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include maxq(mob-landscape) {
    padding: 0 24px;
  }

  &__content {
    position: relative;
    @include maxq(mob-landscape) {
      width: 100%;
      max-width: 410px;
      display: flex;
      justify-content: center;
    }
    @include maxq(mob-portrait) {
      max-width: 375px;
    }
  }

  &__tasks {
    position: relative;
    width: 410px;
    height: 85px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding-right: 16px;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--scroll-bg);
      border-radius: 2px;
    }
    @include maxq(mob-landscape) {
      width: 100%;
      max-width: 410px;
    }
  }
  &__sort {
    position: absolute;
    top: 9px;
    left: -24px;
    cursor: pointer;
    &--dark {
      g circle {
        fill: #f2f2f2;
      }
    }
  }
  &__task {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 6px;
    border-radius: 12px;
    @include easeInOut(300ms, all);
    &:hover {
      background-color: var(--scroll-bg);
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__checkbox {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  &__task-title {
    color: var(--task-color);
    @include maxq(mob-portrait) {
      text-overflow: ellipsis;
      overflow: hidden;
      width: 130px;
      white-space: nowrap;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  &__delete,
  &__edit {
    cursor: pointer;
  }
  &__edit {
    &--dark {
      path {
        stroke: #f2f2f2;
      }
    }
  }
}
</style>
