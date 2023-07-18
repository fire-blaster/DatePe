import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import userReducer from '../reducers/userReducer';
import ReduxThunk from 'redux-thunk'


const rootReducer = combineReducers({
    userReducer: userReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;
