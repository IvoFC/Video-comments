import { v4 } from 'node-uuid';

export function addComment(comment) {
    return {
        type: 'comment/add',
        comment: {
            id: v4(),
            replys: [],
            ...comment
        },
    };
}