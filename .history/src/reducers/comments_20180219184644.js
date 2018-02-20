export default function comments(state = [], action) {
    switch (action.type) {
        case 'comment/add':
            return [action.comment].concat(state);

        default:
            return state;
    }
}