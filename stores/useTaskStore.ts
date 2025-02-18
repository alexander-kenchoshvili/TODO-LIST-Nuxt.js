import { defineStore } from 'pinia';
import type { TaskInterface } from '~/types/ContentType';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as TaskInterface[],
    newTask: '',
  }),
  actions: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({
          id: Date.now(),
          title: this.newTask.trim(),
          completed: false,
        });
        this.newTask = '';
      }
    },
    toggleTaskStatus(taskId: number) {
      const task = this.tasks.find((t) => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    updateTask(id: number, newTitle: string) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.title = newTitle.trim();
      }
    },
    removeTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
});
