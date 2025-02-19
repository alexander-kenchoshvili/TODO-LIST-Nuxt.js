<script setup lang="ts">
import EditIcon from '~/assets/icons/EditIcon.vue';
import DeleteIcon from '~/assets/icons/DeleteIcon.vue';
import SortIcon from '~/assets/icons/SortIcon.vue';
import type { TaskInterface } from '~/types/ContentType';

const { $isDarkMode: isDarkMode } = useNuxtApp();
const taskStore = useTaskStore();
const sortTasks = ref(false);
const openModal = ref(false);
const taskData = ref();

const displayedTasks = ref([...taskStore.tasks]);

const updateFilteredTasks = (newTasks: TaskInterface[]) => {
  displayedTasks.value = newTasks;
};

const sortedTasks = computed(() =>
  sortTasks.value
    ? [...displayedTasks.value]
    : [...displayedTasks.value].reverse()
);

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
  <div class="task-list">
    <div class="task-list__content">
      <SortIcon
        @click="sortTasks = !sortTasks"
        v-if="taskStore.tasks.length > 1"
        class="task-list__sort"
        :class="{ 'task-list__sort--dark': isDarkMode }"
      />
      <ul class="task-list__tasks">
        <li class="task-list__task" v-for="task in sortedTasks" :key="task.id">
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
            />
          </div>
        </li>
      </ul>
    </div>
    <ProgressBar />

    <TaskFilter @update:filteredTasks="updateFilteredTasks" />
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

<style lang="scss">
.task-list {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__content {
    position: relative;
  }

  &__tasks {
    position: relative;
    width: 410px;
    max-height: 85px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding-right: 16px;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--scroll-bg);
      border-radius: 2px;
    }
  }
  &__sort {
    position: absolute;
    top: 9px;
    left: -24px;
    cursor: pointer;
    &--dark {
      g circle {
        fill: rgb(236, 53, 53);
      }
    }
  }
  &__task {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 6px;
    border-radius: 12px;
    @include easeInOut(300ms, all);
    &:hover {
      background-color: var(--scroll-bg);
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__checkbox {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  &__task-title {
    color: var(--task-color);
  }
  &__buttons {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  &__delete,
  &__edit {
    cursor: pointer;
  }
  &__edit {
    &--dark {
      path {
        stroke: rgb(236, 53, 53);
      }
    }
  }
}
</style>
