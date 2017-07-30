const initialState = [];

// Редьюсер получает предыдущий state и action и возвращает новый state, обновляет store при выстреле action
export default function deleteUser(state = initialState, action){
    if(action.type === 'DELETE_USER'){
        return action.payload;
    }
    return state;
}