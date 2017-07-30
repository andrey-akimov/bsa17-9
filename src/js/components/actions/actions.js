export function onAddUser (userName) {
    const action = {
        type: 'ADD_USER',
        payload: userName
    };
    return action;
}

export function onFindUser (userName) {
    const action = {
        type: 'FIND_USER',
        payload: userName
    };
    return action;
}

export function onDeleteUser (userName) {
    const action = {
        type: 'DELETE_USER',
        payload: userName
    };
    return action;
}