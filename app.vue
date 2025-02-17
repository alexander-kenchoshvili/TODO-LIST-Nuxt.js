<script setup lang="ts">
const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initializeMode();
});
</script>

<template>
  <div>
    <TodoList />
  </div>
</template>
