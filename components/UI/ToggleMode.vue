<script setup lang="ts">
const themeStore = useThemeStore();
</script>

<template>
  <button @click="themeStore.toggleTheme()">
    {{ themeStore.isDarkMode ? ' Dark' : 'Light' }}
  </button>
</template>
