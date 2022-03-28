import {Flex, Text} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';
import {Transaction} from '../interfaces/Transaction';
import {RootState} from '../store';

const IncomeExpense = () => {
  const transactionsList = useSelector(
    (state: RootState) => state.transactionsList,
  );
  const {transactions}: any = transactionsList;

  const amounts = transactions?.map(
    (transaction: Transaction) => transaction.amount,
  );

  const expenses = amounts
    ?.filter((amount: number) => amount < 0)
    .reduce((acc: number, amount: number) => (acc += amount))
    .toFixed(2);

  const incomes = amounts
    ?.filter((amount: number) => amount > 0)
    .reduce((acc: number, amount: number) => (acc += amount))
    .toFixed(2);

  return (
    <>
      <Flex direction="column">
        <Text fontSize="lg" color="green.600">
          Income
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="green.600">
          ${incomes}
        </Text>
      </Flex>
      <Flex direction="column" marginLeft="auto">
        <Text fontSize="lg" color="red.600">
          Expense
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="red.600">
          ${expenses}
        </Text>
      </Flex>
    </>
  );
};

export default IncomeExpense;
