export function addComment(comment) {
    return {
      type: 'comment/add',
      todo: { id: +(new Date), completed: false, ...comment },
    };
  }