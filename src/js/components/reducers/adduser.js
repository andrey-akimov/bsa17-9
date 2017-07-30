const initialState = [];

// Редьюсер получает предыдущий state и action и возвращает новый state, обновляет store при выстреле action
export default function newUser(state = initialState, action){
    if(action.type === 'ADD_USER'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}