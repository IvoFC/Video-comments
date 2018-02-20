import v4 from ''

export function addComment(comment) {
    return {
      type: 'comment/add',
      comment: { id: +(new Date), completed: false, ...comment },
    };
  }