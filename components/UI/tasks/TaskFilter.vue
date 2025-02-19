<script setup lang="ts">
const taskStore = useTaskStore();

type FilterType = 'all' | 'active' | 'completed';

const currentFilter = ref<FilterType>('all');

const emit = defineEmits(['update:filteredTasks']);

const filteredTasks = computed(() => {
  if (currentFilter.value === 'all') {
    return taskStore.tasks;
  }
  return taskStore.tasks.filter((task) => {
    return currentFilter.value === 'active' ? !task.completed : task.completed;
  });
});

const clearCompleted = () => {
  taskStore.tasks
    .filter((task) => task.completed)
    .forEach((task) => taskStore.removeTask(task.id));
  currentFilter.value = 'all';
};

const checkedAllAsCompleted = () => {
  taskStore.tasks.forEach((task) => {
    if (!task.completed) {
      taskStore.toggleTaskStatus(task.id);
    }
  });
};

const changeFilter = (filter: FilterType) => {
  currentFilter.value = filter;
  emit('update:filteredTasks', filteredTasks.value);
};

watch(filteredTasks, (newTasks) => {
  emit('update:filteredTasks', newTasks);
  if (newTasks.length === 0) {
    currentFilter.value = 'all';
  }
});

onMounted(() => {
  emit('update:filteredTasks', taskStore.tasks);
});
</script>

<template>
  <div v-if="taskStore.tasks.length" class="task-filter">
    <Transition name="fade">
      <NakedButton
        btn-text="check all"
        :hide-button="!taskStore.showCheckAll"
        @click="checkedAllAsCompleted"
      />
    </Transition>
    <Transition name="fade">
      <NakedButton
        btn-text="all"
        :active="currentFilter === 'all'"
        @click="changeFilter('all')"
      />
    </Transition>
    <Transition name="fade">
      <NakedButton
        :hide-button="!taskStore.hasMixedTasks"
        :active="currentFilter === 'active'"
        btn-text="active"
        @click="changeFilter('active')"
      />
    </Transition>
    <Transition name="fade">
      <NakedButton
        :hide-button="!taskStore.hasMixedTasks"
        btn-text="completed"
        @click="changeFilter('completed')"
        :active="currentFilter === 'completed'"
      />
    </Transition>
    <Transition name="fade">
      <NakedButton
        :hide-button="!taskStore.allTasksCompleted"
        btn-text="clear complited"
        @click="clearCompleted"
      />
    </Transition>
  </div>
</template>

<style lang="scss">
.task-filter {
  margin-top: 32px;
  display: flex;
  gap: 10px;
  @include maxq(mob-landscape) {
    gap: 4;
    flex-wrap: wrap;
  }
}
</style>
