import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {userRegisterReducer, userSigninReducer} from './reducers/userReducers';

const initialState: any = {
  userSignin: {
    userInfo: AsyncStorage.getItem('userInfo'),
  },
};

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducer>;

export default store;
