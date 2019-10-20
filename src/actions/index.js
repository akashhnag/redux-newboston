export const selectUser = (user) => {
    console.log('user', user);
    return ({
        type: 'USER_SELECTED',
        payload: user
    })
}
