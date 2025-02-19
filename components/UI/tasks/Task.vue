<script setup lang="ts">
import EditIcon from '~/assets/icons/EditIcon.vue';
import DeleteIcon from '~/assets/icons/DeleteIcon.vue';
import type { TaskInterface } from '~/types/ContentType';

defineProps<{
  task: TaskInterface;
}>();

const { $isDarkMode: isDarkMode } = useNuxtApp();
const taskStore = useTaskStore();

const taskData = ref();
const openModal = ref(false);

const handleEdit = (task: TaskInterface) => {
  taskData.value = { ...task };
  openModal.value = true;
};
const updateTask = () => {
  if (taskData.value) {
    taskStore.updateTask(taskData.value.id, taskData.value.title);
    closeModal();
  }
};
const closeModal = () => {
  openModal.value = false;
};
</script>

<template>
  <div class="task-list__task">
    <div class="task-list__inner">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="taskStore.toggleTaskStatus(task.id)"
        class="task-list__checkbox"
      />
      <span
        class="task-list__task-title"
        :style="{ opacity: task.completed ? '0.5' : '1' }"
      >
        {{ task.title }}
      </span>
    </div>
    <div class="task-list__buttons">
      <EditIcon
        class="task-list__edit"
        :class="{ 'task-list__edit--dark': isDarkMode }"
        @click="handleEdit(task)"
      />
      <DeleteIcon
        @click="taskStore.removeTask(task.id)"
        class="task-list__delete"
        :class="{ 'task-list__delete--dark': isDarkMode }"
      />
    </div>
  </div>

  <teleport to="body">
    <EditModal
      v-if="openModal"
      :data="taskData"
      @save="updateTask"
      @cancel="closeModal"
    />
  </teleport>
</template>
