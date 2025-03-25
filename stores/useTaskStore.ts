import { defineStore } from 'pinia';
import type { TaskInterface } from '~/types/ContentType';

const STORAGE_KEY = 'tasks';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as TaskInterface[],
    newTask: '',
  }),

  getters: {
    allTasksCompleted: (state) =>
      state.tasks.length > 0 && state.tasks.every((task) => task.completed),

    hasMixedTasks: (state) =>
      state.tasks.some((task) => task.completed) &&
      state.tasks.some((task) => !task.completed),

    allTasksActive: (state) =>
      state.tasks.length > 0 && state.tasks.every((task) => !task.completed),

    showCheckAll: (state) =>
      (state.tasks.some((task) => task.completed) &&
        state.tasks.some((task) => !task.completed)) ||
      (state.tasks.length > 0 && state.tasks.every((task) => !task.completed)),
  },

  actions: {
    saveTasks() {
      if (process.client) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
      }
    },

    fetchTasks() {
      if (process.client) {
        const storedTasks = localStorage.getItem(STORAGE_KEY);
        if (storedTasks) {
          this.tasks = JSON.parse(storedTasks);
        }
      }
    },

    addTask() {
      if (this.newTask.trim()) {
        const newTask = {
          id: Date.now().toString(),
          title: this.newTask.trim(),
          completed: false,
        };
        this.tasks.push(newTask);
        this.newTask = '';
        this.saveTasks();
      }
    },

    toggleTaskStatus(taskId: string) {
      const task = this.tasks.find((t) => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        this.saveTasks();
      }
    },

    updateTask(id: string, newTitle: string) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.title = newTitle.trim();
        this.saveTasks();
      }
    },

    removeTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      this.saveTasks();
    },
  },
});
