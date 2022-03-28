import {
  ADD_TRANSACTION,
  ADD_TRANSACTION_ERROR,
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_ERROR,
} from './../constants/transactionConstant';
import {baseURL} from './../utils/utils';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTransactions = () => async (dispatch: any) => {
  const user = await AsyncStorage.getItem('userInfo');
  const userInfo = user ? JSON.parse(user) : null;
  try {
    const {data} = await axios.get(`${baseURL}/api/transactions`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: GET_TRANSACTIONS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_TRANSACTIONS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const newTransaction =
  (label: string, amount: string) => async (dispatch: any) => {
    const user = await AsyncStorage.getItem('userInfo');
    const userInfo = user ? JSON.parse(user) : null;
    try {
      const {data} = await axios.post(
        `${baseURL}/api/transactions`,
        {label, amount},
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        },
      );
      dispatch({
        type: ADD_TRANSACTION,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ADD_TRANSACTION_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
