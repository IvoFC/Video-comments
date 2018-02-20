import { v4 } from 'node-uuid';

export function addComment(comment) {
    return {
        type: 'comment/add',
        comment: comment
    };
    export function updateComment(todo, updates) {
        return {
            type: 'comment/update',
            comment: { ...todo, ...updates },
        };
    }
}