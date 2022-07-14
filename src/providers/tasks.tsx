import { useState, ReactNode, useContext, createContext } from "react";
import { Task } from "@/types/tasks";

type Tasks = {
  tasks: Task[];
  createTask: (task: string) => void;
  checkTask: (taskId: number) => void;
  removeTask: (task: Task) => void;
};

type TaskProviderProps = {
  children: ReactNode;
};

const TaskContext = createContext({} as Tasks);

function TasksProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(newTask: string) {
    setTasks([...tasks, { id: Math.random(), name: newTask, checked: false }]);
  }

  function checkTask(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId && !task.checked) {
        return { ...task, checked: true };
      }

      if (task.id === taskId && task.checked) {
        return { ...task, checked: false };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function removeTask(task: Task) {
    const taskIndex = tasks.indexOf(task);

    tasks.splice(taskIndex, 1);

    setTasks([...tasks]);
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, checkTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TaskContext);

  return context;
}

export { useTasks, TasksProvider };
