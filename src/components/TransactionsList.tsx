// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Box,
  // FlatList,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTransactions} from '../actions/transactionActions';
import {Transaction} from '../interfaces/Transaction';
import {RootState} from '../store';
import AlertMessages from './AlertMessages';
import LoadingBox from './LoadingBox';

const TransactionsList = () => {
  const [loading, setLoading] = useState<Boolean>(true);

  const transactionsList = useSelector(
    (state: RootState) => state.transactionsList,
  );

  const {transactions, error}: any = transactionsList;
  const dispatch = useDispatch();

  useEffect(() => {
    let isUnmount = false;
    dispatch(getTransactions());
    if (!isUnmount) {
      setLoading(false);
    }

    return () => {
      isUnmount = true;
    };
  }, [dispatch, transactions]);

  return (
    <Box>
      <Heading fontSize="md" p="1" pb="1">
        {transactions && transactions.length} Transactions
      </Heading>
      {error && <AlertMessages>{error}</AlertMessages>}
      {loading ? (
        <LoadingBox />
      ) : transactions?.length > 0 ? (
        <Text textAlign="center" marginTop="5%">
          No Transactions.
        </Text>
      ) : (
        transactions?.map((transaction: Transaction) => {
          <Box
            borderBottomWidth="1"
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2">
            <HStack space={3} justifyContent="space-between">
              <VStack>
                <Text fontSize="md" color="coolGray.800" bold>
                  {transaction.label ? transaction.label : 'test'}
                </Text>
                <Text>{transaction.createdAt}</Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="md"
                alignSelf="flex-start"
                bold
                color={transaction.amount > 0 ? 'green.500' : 'red.500'}>
                ${transaction.amount}
              </Text>
            </HStack>
          </Box>;
        })
      )}
    </Box>
  );
};

export default TransactionsList;
