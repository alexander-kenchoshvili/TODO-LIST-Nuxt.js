<script setup lang="ts">
const taskStore = useTaskStore();

onMounted(() => {
  taskStore.fetchTasks();
});
</script>

<template>
  <div>
    <TodoList />
  </div>
</template>
