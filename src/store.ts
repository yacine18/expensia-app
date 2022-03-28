import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {userRegisterReducer, userSigninReducer} from './reducers/userReducers';
import {
  transactionsListReducer,
  addTransactionReducer,
} from './reducers/transactionReducers';

const initialState = {};

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
  transactionsList: transactionsListReducer,
  addTransaction: addTransactionReducer,
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducer>;

export default store;
