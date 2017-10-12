const initialState = {
    users: [
        {
            name: 'Andrey',
            id: 1
        },
        {
            name: 'Bob',
            id: 2
        },
        {
            name: 'John',
            id: 3
        }
    ],
    findUser: ''
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {
                users: [
                    ...state.users,
                    {
                        name: action.payload,
                        id: Date.now()
                    }
                ],
                findUser: state.findUser
            };
            break;
        case 'DELETE_USER':
            return {
                users: state.users.filter(user => user.name != action.payload),
                findUser: state.findUser
            };
            break;
        case 'FIND_USER':
            return {
                users: state.users,
                findUser: state.findUser
            };
            break;

        default:
            return state;
            break;
    }
}
export default reducer;
