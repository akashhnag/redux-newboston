export default function reducerActiveUser(state = null, action) {
    switch (action.type) {
        case 'USER_SELECTED': return action.payload;
            break;

    }
    return state;
}
