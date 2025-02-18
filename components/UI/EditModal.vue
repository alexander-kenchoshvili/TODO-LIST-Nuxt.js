<script setup lang="ts">
import type { TaskInterface } from '~/types/ContentType';

defineProps<{
  data: TaskInterface;
}>();

const emit = defineEmits(['save', 'cancel']);

const saveTitle = () => {
  emit('save');
};
const cancel = () => {
  emit('cancel');
};
</script>

<template>
  <div class="modal__overlay" @click="cancel">
    <div class="modal__content" @click.stop>
      <h2 class="modal__title">Edit Task</h2>
      <BaseInput v-model="data.title" />
      <div class="modal__actions">
        <BaseButton text="save" @click="saveTitle" />
        <BaseButton text="cancel" @click="cancel" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  &__title {
    color: var(--color-text);
  }
  &__content {
    background: var(--modal-bg);
    width: 300px;
    height: 300px;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  &__actions {
    display: flex;
    justify-content: center;
    gap: 12px;
  }
}
</style>
