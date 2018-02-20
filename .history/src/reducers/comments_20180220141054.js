export default function comments(state = [], action) {
    switch (action.type) {
        case 'comment/add':
            return [action.comment].concat(state);

        // case 'todo/update':
        //     return state.map((c) => action.comment || c);

        default:
            return state;
    }
}