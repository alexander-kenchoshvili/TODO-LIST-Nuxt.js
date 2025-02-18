import { defineStore } from 'pinia';
import type { TaskInterface } from '~/types/ContentType';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as TaskInterface['tasks'][],
    newTask: '' as TaskInterface['newTask'],
  }),
  actions: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({
          id: Date.now(),
          task: this.newTask.trim(),
          completed: false,
        });
        this.newTask = '';
      }
    },
    removeTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
});
