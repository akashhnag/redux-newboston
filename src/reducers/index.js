import { combineReducers } from 'redux';
import users from './reducerUsers';
import reducerActiveUser from './reducerActiveUser'

const allReducers = combineReducers({
    users: users,
    activeUser: reducerActiveUser
})

export default allReducers;
