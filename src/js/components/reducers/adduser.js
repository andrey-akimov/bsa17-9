const initialState = [];

export default function newUser(state = initialState, action) {
    if (action.type === 'ADD_USER') {
        return [...state, action.payload];
    }
    return state;
}
