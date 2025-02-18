export interface InputProps {
  modelValue: string;
  placeholder?: string;
  type?: string;
}

export interface TaskInterface {
  tasks: {
    id: number;
    task: string;
    completed: boolean;
  };
  newTask: string;
}
