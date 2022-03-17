import {Flex, Text} from 'native-base';
import React from 'react';

const IncomeExpense = () => {
  return (
    <>
      <Flex direction="column">
        <Text fontSize="xl" color="green.600">
          Income
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="green.600">
          $500.00
        </Text>
      </Flex>
      <Flex direction="column" marginLeft="auto">
        <Text fontSize="xl" color="red.600">
          Expense
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="red.600">
          $-50.00
        </Text>
      </Flex>
    </>
  );
};

export default IncomeExpense;
