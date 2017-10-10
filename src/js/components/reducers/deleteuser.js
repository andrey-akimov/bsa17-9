const initialState = [];

export default function deleteUser(state = initialState, action) {
    if (action.type === 'DELETE_USER') {
        return [...state, action.payload];
    }
    return state;
}
