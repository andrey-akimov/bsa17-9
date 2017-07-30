const initialState = '';

// Редьюсер получает предыдущий state и action и возвращает новый state, обновляет store при выстреле action
export default function findUser(state = initialState, action){
    if(action.type === 'FIND_USER'){
        // console.log('AMA FROM FILTER!!', action.payload);
        return action.payload;
    }
    return state;
}