export interface InputProps {
  modelValue: string;
  placeholder?: string;
  type?: string;
}

export interface TaskInterface {
  id: number;
  title: string;
  completed: boolean;
}
