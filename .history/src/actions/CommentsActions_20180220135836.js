import { v4 } from 'node-uuid';

export function addComment(comment) {
    return {
        type: 'comment/add',
        comment: comment
    };
    export function updateTodo(todo, updates) {
        return {
            type: 'todo/update',
            todo: { ...todo, ...updates },
        };
    }
}