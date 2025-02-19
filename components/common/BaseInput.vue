<script setup lang="ts">
import type { InputProps } from '@/types/ContentType';

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  placeholder: '',
  type: 'text',
});

const emit = defineEmits(['update:modelValue', 'submit']);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && props.modelValue.trim()) {
    emit('submit');
  }
};
</script>

<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    class="base-input"
    @input="handleInput"
    @keydown="handleKeydown"
  />
</template>

<style lang="scss">
.base-input {
  width: 100%;
  max-width: 317px;
  height: 40px;
  padding: 12px;
  border: 1px solid var(--input-border);
  color: var(--color-text);
  background-color: var(--input-bg);
  border-radius: 8px;
  outline: none;
  @include ease(300, all);

  &:focus {
    border-color: var(--button-bg);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
  &::placeholder {
    color: var(--input-placeholder);
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
