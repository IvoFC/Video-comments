export default function todos(state = [], action) {
    switch (action.type) {
        case 'todo/add':
            return [action.todo].concat(state);

        default:
            return state;
    }
}