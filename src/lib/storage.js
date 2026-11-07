export function loadTasks() {
  const data = localStorage.getItem('tasks');
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

export function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loginUser(email) {
  localStorage.setItem('user', email);
}

export function logoutUser() {
  localStorage.removeItem('user');
}

export function getUser() {
  return localStorage.getItem('user');
}
