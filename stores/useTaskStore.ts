import { defineStore } from 'pinia';
import type { TaskInterface } from '~/types/ContentType';
import { useNuxtApp } from '#app';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as TaskInterface[],
    newTask: '',
  }),

  actions: {
    async fetchTasks() {
      const { $db } = useNuxtApp();
      const querySnapshot = await getDocs(collection($db, 'todos'));
      this.tasks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as any;
    },

    async addTask() {
      if (this.newTask.trim()) {
        const { $db } = useNuxtApp();
        const docRef = await addDoc(collection($db, 'todos'), {
          title: this.newTask.trim(),
          completed: false,
        });

        this.tasks.push({
          id: docRef.id,
          title: this.newTask.trim(),
          completed: false,
        });
        this.newTask = '';
      }
    },

    async toggleTaskStatus(taskId: string) {
      const { $db } = useNuxtApp();
      const task = this.tasks.find((t) => t.id === taskId);
      if (task) {
        const taskRef = doc($db, 'todos', taskId);
        await updateDoc(taskRef, { completed: !task.completed });
        task.completed = !task.completed;
      }
    },

    async updateTask(id: string, newTitle: string) {
      const { $db } = useNuxtApp();
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        const taskRef = doc($db, 'todos', id);
        await updateDoc(taskRef, { title: newTitle.trim() });
        task.title = newTitle.trim();
      }
    },

    async removeTask(id: string) {
      const { $db } = useNuxtApp();
      await deleteDoc(doc($db, 'todos', id));
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
});
