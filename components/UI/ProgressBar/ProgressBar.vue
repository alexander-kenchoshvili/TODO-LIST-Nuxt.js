<script setup lang="ts">
const taskStore = useTaskStore();

const progressCards = computed(() => {
  const total = taskStore.tasks.length;
  return [
    {
      title: 'Completed',
      count: taskStore.tasks.filter((task) => task.completed).length,
      percentage: total
        ? (taskStore.tasks.filter((task) => task.completed).length / total) *
          100
        : 0,
    },
    {
      title: 'To be finished',
      count: taskStore.tasks.filter((task) => !task.completed).length,
      percentage: total
        ? (taskStore.tasks.filter((task) => !task.completed).length / total) *
          100
        : 0,
    },
  ];
});
</script>

<template>
  <div v-if="taskStore.tasks.length" class="task-progress">
    <div
      v-for="card in progressCards"
      :key="card.title"
      class="task-progress__card"
    >
      <span class="task-progress__count text-semibold"
        >{{ card.count }} Tasks</span
      >
      <h3 class="task-progress__title text-bold">{{ card.title }}</h3>
      <div class="task-progress__bar-container">
        <div
          class="task-progress__bar"
          :class="{
            'task-progress__bar--completed': card.title === 'Completed',
          }"
          :style="{ width: `${card.percentage}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.task-progress {
  display: flex;
  gap: 30px;
  margin-top: 32px;
  @include maxq(mob-portrait) {
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 190px;
    height: 85px;
    padding: 16px;
    background: var(--progress-bg);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    @include maxq(mob-portrait) {
      width: 100%;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    color: var(--progress-title);
    margin-top: 4px;
    font-size: 14px;
  }

  &__count {
    font-size: 12px;
    color: var(--progress-title);
    opacity: 0.5;
  }

  &__bar-container {
    margin-top: 12px;
    width: 100%;
    height: 6px;
    background-color: #e5e7eb;
    border-radius: 3px;
    overflow: hidden;
  }

  &__bar {
    height: 100%;
    transition: width 0.3s ease;
    background-color: #ef5da8;

    &--completed {
      background-color: #5d5fef;
    }
  }
}
</style>
