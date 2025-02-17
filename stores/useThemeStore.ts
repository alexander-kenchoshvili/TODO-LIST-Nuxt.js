import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkMode: true,
  }),
  actions: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      if (process.client) {
        localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      }
      this.updatMode();
    },
    updatMode() {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    initializeMode() {
      if (process.client) {
        const savedMode = localStorage.getItem('theme');
        if (savedMode) {
          this.isDarkMode = savedMode === 'dark';
          this.updatMode();
        }
      }
    },
  },
});
