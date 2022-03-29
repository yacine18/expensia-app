import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from 'native-base';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTransactions} from '../actions/transactionActions';
import {Transaction} from '../interfaces/Transaction';
import {RootState} from '../store';
import AlertMessages from './AlertMessages';

const Balance = () => {
  const transactionsList = useSelector(
    (state: RootState) => state.transactionsList,
  );

  const {transactions, error}: any = transactionsList;
  const dispatch = useDispatch();

  const amounts =
    transactions && transactions.length > 0
      ? transactions?.map((transaction: Transaction) => transaction.amount)
      : null;

  const total =
    transactions && transactions.length > 0
      ? amounts?.reduce((acc: number, item: number) => (acc += item), 0)
      : 0;

  useEffect(() => {
    const getToken = async () => {
      try {
        let userData = await AsyncStorage.getItem('userInfo');
        userData ? JSON.parse(userData) : null;
      } catch (e: any) {
        console.log(e.message);
      }
    };

    getToken();
    dispatch(getTransactions());
  }, [dispatch, transactions]);

  return (
    <>
      {error && <AlertMessages>{error}</AlertMessages>}
      <Text fontSize="lg">Balance</Text>
      <Text fontWeight="bold" fontSize="lg">
        ${total.toFixed(2)}
      </Text>
    </>
  );
};

export default Balance;
