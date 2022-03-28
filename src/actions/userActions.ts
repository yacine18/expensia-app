import {baseURL} from './../utils/utils';
import {USER_SIGNOUT} from './../constants/userConstant';
import axios from 'axios';
import {
  REGISTER_USER,
  REGISTER_USER_ERROR,
  SIGNIN_USER,
  SIGNIN_USER_ERROR,
} from '../constants/userConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const register =
  (name: string, email: string, password: string) => async (dispatch: any) => {
    try {
      const {data} = await axios.post(`${baseURL}/api/users/register`, {
        name,
        email,
        password,
      });
      dispatch({
        type: REGISTER_USER,
        payload: data,
      });
      await AsyncStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      const {data} = await axios.post(`${baseURL}/api/users/login`, {
        email,
        password,
      });
      dispatch({
        type: SIGNIN_USER,
        payload: data,
      });
      await AsyncStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: SIGNIN_USER_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = () => async (dispatch: any) => {
  await AsyncStorage.removeItem('userInfo');
  dispatch({type: USER_SIGNOUT});
};
