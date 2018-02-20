export function addComment(todo) {
    return {
      type: 'comment/add',
      todo: { id: +(new Date), completed: false, ...todo },
    };
  }