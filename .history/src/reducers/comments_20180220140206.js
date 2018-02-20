export default function comments(state = [], action) {
    switch (action.type) {
        case 'comment/add':
            return [action.comment].concat(state);

        case 'todo/update':
            return state.map((t) => t.id === action.comment.id ? action.todo : t);

        default:
            return state;
    }
}