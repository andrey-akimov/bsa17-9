const initialState = '';

// Редьюсер получает предыдущий state и action и возвращает новый state, обновляет store при выстреле action
export default function findUser(state = initialState, action){
    if(action.type === 'FIND_USER'){
        return action.payload;
    }
    return state;
}