import { v4 } from 'node-uuid';

export function addComment(comment) {
    return {
        type: 'comment/add',
        comment: comment
    };
}

export function updateComment(comment, updates) {
    return {
        type: 'comment/update',
        comment: { comment, ...updates },
    };
}