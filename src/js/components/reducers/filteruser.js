const initialState = '';

export default function findUser(state = initialState, action) {
    if (action.type === 'FIND_USER') {
        return action.payload;
    }
    return state;
}
