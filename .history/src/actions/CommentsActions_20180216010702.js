export function addTodo(todo) {
    return {
      type: 'todo/add',
      todo: { id: +(new Date), completed: false, ...todo },
    };
  }