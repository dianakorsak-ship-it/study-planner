import { useState } from "react";
import { loadTasks, saveTasks } from "../lib/storage";

// Хук для роботи зі списком завдань
function useTasks() {
  const [tasks, setTasks] = useState(loadTasks);

  function updateTasks(newList) {
    setTasks(newList);
    saveTasks(newList);
  }

  function addTask(task) {
    const newTask = { ...task, id: Date.now(), done: false };
    updateTasks([...tasks, newTask]);
  }

  function completeTask(id) {
    const newList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: true, doneAt: new Date().toISOString() };
      }
      return task;
    });
    updateTasks(newList);
  }

  function deleteTask(id) {
    updateTasks(tasks.filter((task) => task.id !== id));
  }

  return { tasks, addTask, completeTask, deleteTask };
}

export default useTasks;
